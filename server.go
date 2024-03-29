package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
)

func handler(fs http.Handler, language string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		baseRoute := fmt.Sprintf("/%s/", language)
		if !strings.HasPrefix(r.URL.Path, baseRoute) {
			http.NotFound(w, r)
			return
		}

		r.URL.Path = baseRoute + "[[...rest]].html"
		fs.ServeHTTP(w, r)
	}
}

func rootHandler(fs http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// There is nothing at /, so redirect to the client SDKs page for the default language
		// We need to check for this explicitly because mux matches / to every route
		if r.URL.Path == "/" {
			http.RedirectHandler("/typescript/client_sdks", http.StatusSeeOther).ServeHTTP(w, r)
			return
		}

		// Files from public end up in the root of the build directory
		if isPublicFile(r.URL.Path) {
			fs.ServeHTTP(w, r)
			return
		}

		http.NotFound(w, r)
	}
}

func isPublicFile(path string) bool {
	return strings.Count(path, "/") == 1 && strings.Count(path, ".") == 1
}

func main() {
	fs := http.FileServer(http.Dir("./out"))

	// Serve static files generated by Next
	http.Handle("/_next/", fs)

	languages := []string{"typescript", "curl"}
	for _, language := range languages {
		route := fmt.Sprintf("/%s/", language)
		http.Handle(route, handler(fs, language))
	}

	// Mux will match / to every other route, so we need to handle it carefully
	http.Handle("/", rootHandler(fs))

	listeningPort := os.Getenv("PORT")
	if listeningPort == "" {
		// Default locally to port 3000
		listeningPort = "3000"
	}

	log.Print(fmt.Sprintf("Listening on :%s...", listeningPort))
	err := http.ListenAndServe(fmt.Sprintf(":%s", listeningPort), nil)
	if err != nil {
		log.Fatal(err)
	}
}
