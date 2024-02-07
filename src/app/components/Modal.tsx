import React, { useState, createContext, useContext } from 'react';

const ModalContext = createContext({
  isShown: false,
  showModal: () => {},
  hideModal: () => {},
});

export const useModal = () => useContext(ModalContext);

const ModalProvider: React.FC = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  const showModal = () => setIsShown(true);
  const hideModal = () => setIsShown(false);

  return (
    <ModalContext.Provider value={{ isShown, showModal, hideModal }}>
 
      {children}
      {isShown && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
       <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Modal content here.</p>
            <button
          onClick={onClose}
          className="mt-4 bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
