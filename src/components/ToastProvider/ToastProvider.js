import React from 'react';
import handleKeyDown from '../../hooks/useEscapeHook';
export const ToastContext = React.createContext();

function ToastProvider({children}) {
    const [toastContent, setToastContent] = React.useState([]);

    function createToast(message, variant) {
    const nextToasts = [
      ...toastContent,
      {
        id:crypto.randomUUID(),
        message,
        variant
      }
    ]
    setToastContent(nextToasts);
  }

const handleEscape = React.useCallback(() => {
  setToastContent([]);
}, [])

handleKeyDown('Escape', handleEscape);



    function handleDismiss(id) {
    const nextToasts = toastContent.filter((toast) => {
      return toast.id !== id;
    });

    setToastContent(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toastContent, createToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
