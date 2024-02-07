import React, { createContext, useContext, useState } from 'react';

const AlertContext = createContext({
  message: '',
  showAlert: (msg: string) => {},
  hideAlert: () => {},
});

export const useAlert = () => useContext(AlertContext);

const AlertProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState('');

  const showAlert = (msg: string) => setMessage(msg);
  const hideAlert = () => setMessage('');

  return (
    <AlertContext.Provider value={{ message, showAlert, hideAlert }}>
      {children}
      {message && (
        <div className="fixed bottom-0 right-0 m-4 bg-blue-500 text-white p-2 rounded">
          {message}
          <button onClick={hideAlert} className="ml-4">
            Close
          </button>
        </div>
      )}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
