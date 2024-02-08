import React, { useState } from 'react';
import Layout from '../app/layout';
import Button from '../app/components/button';
import Card from '../app/components/Card';
import Navbar from '../app/components/navbar';
import Image from 'next/image';

const AboutPage = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 35, condition: "Healthy" },
    { id: 2, name: "Jane Smith", age: 45, condition: "Diabetes" },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ name: '', age: 0, condition: '' });

  const addPatient = () => {
    const newPatient = { id: Date.now(), name: "New Patient", age: 0, condition: "Unknown" };
    setPatients([...patients, newPatient]);
  };

  const removePatient = (id: number) => {
    setPatients(patients.filter(patient => patient.id !== id));
  };

  const startEditing = (id: number) => {
    const patient = patients.find(patient => patient.id === id);
    if (patient) {
      setEditingId(id);
      setEditForm({ name: patient.name, age: patient.age, condition: patient.condition });
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const applyEdit = () => {
    setPatients(patients.map(patient => {
      if (patient.id === editingId) {
        return { ...patient, ...editForm };
      }
      return patient;
    }));
    setEditingId(null); // Stop editing
  };

  return (
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>This is the about page of our Next.js application.</p>
        <Button onClick={addPatient}>Add New Patient</Button>
        {patients.map((patient) => (
          <Card
            key={patient.id}
            title={patient.name}
            value={`Age: ${patient.age}`}
            description={patient.condition}
            imageUrl="https://m.media-amazon.com/images/I/61DVb05WvgL._AC_UF1000,1000_QL80_.jpg" 
            onAdd={() => console.log("Added")}
            onRemove={() => removePatient(patient.id)}
            onUpdate={() => startEditing(patient.id)}
          />
        ))}
        {editingId && (
          <div>
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
              placeholder="Name"
            />
            <input
              type="number"
              name="age"
              value={editForm.age}
              onChange={handleEditChange}
              placeholder="Age"
            />
            <input
              type="text"
              name="condition"
              value={editForm.condition}
              onChange={handleEditChange}
              placeholder="Condition"
            />
            <Button onClick={applyEdit}>Apply Edit</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AboutPage;
