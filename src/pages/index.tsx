// Exemple dans src/pages/index.tsx
import React from 'react';
import { useModal } from '../app/components/Modal';
import { useAlert } from '../app/components/AlertContext';
import Button from '../app/components/button';

const HomePage = () => {
  const { showModal } = useModal();
  const { showAlert } = useAlert();

  return (
    <div>
      <Button onClick={showModal}>Open Modal</Button>
      <Button variant="secondary" onClick={() => showAlert('This is an alert!')}>
        Show Alert
      </Button>
    </div>
  );
};

export default HomePage;
