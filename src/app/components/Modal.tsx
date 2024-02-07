import React, { useState, createContext, useContext } from 'react';


interface ModalContextProps {
  isShown: boolean;
  showModal: () => void;
  hideModal: () => void;
}


const ModalContext = createContext<ModalContextProps>({
  isShown: false,
  showModal: () => {},
  hideModal: () => {},
});


export const useModal = () => useContext(ModalContext);


interface ModalProviderProps {
  children: React.ReactNode;
}


const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  
  const showModal = () => setIsShown(true);
  const hideModal = () => setIsShown(false);

  return (
    <ModalContext.Provider value={{ isShown, showModal, hideModal }}>
      {/* Afficher les enfants */}
      {children}
      
      {/* Afficher le modal si isShown est vrai */}
      {isShown && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Modal content here.</p>
            <button
              onClick={hideModal} 
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
