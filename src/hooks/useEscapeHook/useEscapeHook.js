import React from 'react';


    function useEscapeHook(key, callback) {
    React.useEffect(()=> {
      function handleKeyDown(event) {
        if (event.code === 'Escape'){
          callback([]);
        }
      }
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [key, callback])
  }

export default useEscapeHook;
