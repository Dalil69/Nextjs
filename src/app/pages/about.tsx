import React from 'react';
import Layout from '../layout';
import Button from '../components/button';



const AboutPage = () => {
  return (
    
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>This is the about page of our Next.js application.</p>
      </div>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    </Layout>
  );
};

export default AboutPage;
