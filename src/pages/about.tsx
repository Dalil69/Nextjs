import React from 'react';
import Layout from '../app/layout';
import Button from '../app/components/button';
import Card from '../app/components/Card';
import Navbar from '../app/components/navbar';
import { ChartBarIcon } from '@heroicons/react/solid';

const AboutPage = () => {
  return (
    
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <Card title="Patients" value="150" icon={<ChartBarIcon className="h-6 w-6" />} />
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>This is the about page of our Next.js application.</p>
      </div>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
      <Card
        title="About Us"
        description="This is a brief description of our company."
        imageUrl="/path/to/image.jpg"
      />
    </Layout>
  );
};

export default AboutPage;
