// _app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import ModalProvider from '../app/components/Modal';
import AlertProvider from '../app/components/AlertContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <ModalProvider>
        {/* Utilisez le composant Component fourni par next/app */}
        <Component {...pageProps} />
      </ModalProvider>
    </AlertProvider>
  );
}

export default MyApp;
