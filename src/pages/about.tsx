import React, { useState } from 'react';
import Layout from '../app/layout';
import Button from '../app/components/button';
import Card from '../app/components/Card';
import Navbar from '../app/components/navbar';
import { ChartBarIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 35, condition: "Healthy" },
    { id: 2, name: "Jane Smith", age: 45, condition: "Diabetes" },
    // Ajoutez d'autres patients selon vos besoins
  ]);

  const addPatient = () => {
    const newPatient = { id: patients.length + 1, name: "New Patient", age: 0, condition: "Unknown" };
    setPatients([...patients, newPatient]);
  };

  // Spécifiez le type de `id` comme `number`
  const removePatient = (id: number) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  const updatePatient = (id: number) => {
    // Logique pour mettre à jour un patient
    // Vous devez implémenter la mise à jour des patients en fonction de l'ID fourni
  };

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Utilisation du composant Card ici */}
        </motion.div>
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>This is the about page of our Next.js application.</p>
        <Button onClick={() => alert('Clicked!')}>Click Me</Button>
      </div>
    </Layout>
  );
};

export default AboutPage;
