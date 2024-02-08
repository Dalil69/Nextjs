import React from 'react';
import { AppProps } from 'next/app';
import ModalProvider from '../app/components/Modal';
import AlertProvider from '../app/components/AlertContext';
import { AuthProvider } from '../app/components/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider> {/* Ajoutez AuthProvider ici */}
      <AlertProvider>
        <ModalProvider>
          {/* Utilisez le composant Component fourni par next/app */}
          <Component {...pageProps} />
        </ModalProvider>
      </AlertProvider>
    </AuthProvider>
  );
}

export default MyApp;
