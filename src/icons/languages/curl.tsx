const Curl = ({ style }: { style?: 'color' | 'outline' }) =>
  style == 'outline' ? (
    <div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 25.6 25.6'
        height='64'
        width='64'
      >
        <path
          d='M23.713 5.368a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062m-10.24 17.615a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062M23.713 2.45a1.89 1.89 0 0 0-1.887 1.887c0 .222.056.43.127.628L13.098 20.14c-.856.18-1.512.903-1.512 1.812a1.89 1.89 0 0 0 1.887 1.887 1.89 1.89 0 0 0 1.887-1.887c0-.2-.056-.4-.12-.6l8.9-15.226c.83-.2 1.46-.9 1.46-1.8a1.89 1.89 0 0 0-1.887-1.887'
          fill='white'
        />
        <path
          d='M16 5.368a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062M5.75 22.984a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062M16 2.45c-1.043 0-1.887.845-1.887 1.887 0 .222.056.43.127.628L5.375 20.14c-.856.18-1.512.903-1.512 1.812A1.89 1.89 0 0 0 5.75 23.84a1.89 1.89 0 0 0 1.887-1.887c0-.2-.056-.4-.12-.6l8.9-15.226c.83-.2 1.46-.9 1.46-1.8A1.89 1.89 0 0 0 15.99 2.45M1.887 8.524a1.03 1.03 0 1 1 0 2.062 1.03 1.03 0 1 1 0-2.062m0 2.918a1.89 1.89 0 0 0 1.887-1.887c0-.2-.057-.4-.12-.6-.25-.75-.935-1.298-1.768-1.298-.133 0-.25.05-.376.076-.854.18-1.5.902-1.5 1.812a1.89 1.89 0 0 0 1.887 1.887M.856 16.15a1.03 1.03 0 1 1 2.062 0 1.03 1.03 0 1 1-2.062 0m2.918 0c0-.2-.057-.4-.12-.6-.25-.75-.934-1.298-1.768-1.298-.133 0-.25.05-.376.075-.854.18-1.5.903-1.5 1.813a1.89 1.89 0 0 0 1.887 1.887 1.89 1.89 0 0 0 1.887-1.887'
          fill='white'
        />
      </svg>
    </div>
  ) : (
    <div style={{ filter: 'brightness(2)' }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 25.6 25.6'
        height='64'
        width='64'
      >
        <path
          d='M23.713 5.368a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062m-10.24 17.615a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062M23.713 2.45a1.89 1.89 0 0 0-1.887 1.887c0 .222.056.43.127.628L13.098 20.14c-.856.18-1.512.903-1.512 1.812a1.89 1.89 0 0 0 1.887 1.887 1.89 1.89 0 0 0 1.887-1.887c0-.2-.056-.4-.12-.6l8.9-15.226c.83-.2 1.46-.9 1.46-1.8a1.89 1.89 0 0 0-1.887-1.887'
          fill='#0c544c'
        />
        <path
          d='M16 5.368a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062M5.75 22.984a1.03 1.03 0 1 1 0-2.062 1.03 1.03 0 1 1 0 2.062M16 2.45c-1.043 0-1.887.845-1.887 1.887 0 .222.056.43.127.628L5.375 20.14c-.856.18-1.512.903-1.512 1.812A1.89 1.89 0 0 0 5.75 23.84a1.89 1.89 0 0 0 1.887-1.887c0-.2-.056-.4-.12-.6l8.9-15.226c.83-.2 1.46-.9 1.46-1.8A1.89 1.89 0 0 0 15.99 2.45M1.887 8.524a1.03 1.03 0 1 1 0 2.062 1.03 1.03 0 1 1 0-2.062m0 2.918a1.89 1.89 0 0 0 1.887-1.887c0-.2-.057-.4-.12-.6-.25-.75-.935-1.298-1.768-1.298-.133 0-.25.05-.376.076-.854.18-1.5.902-1.5 1.812a1.89 1.89 0 0 0 1.887 1.887M.856 16.15a1.03 1.03 0 1 1 2.062 0 1.03 1.03 0 1 1-2.062 0m2.918 0c0-.2-.057-.4-.12-.6-.25-.75-.934-1.298-1.768-1.298-.133 0-.25.05-.376.075-.854.18-1.5.903-1.5 1.813a1.89 1.89 0 0 0 1.887 1.887 1.89 1.89 0 0 0 1.887-1.887'
          fill='#073551'
        />
      </svg>
    </div>
  );

export default Curl;