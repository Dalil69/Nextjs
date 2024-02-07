import React from 'react';
import Layout from '../app/layout';
import MyChart from '../app/components/MyChart';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-lg font-bold">Dashboard</h1>
        <MyChart /> {/* Utilisez le composant MyChart ici */}
        {/* Vous pouvez ajouter plus de contenu ou d'autres composants ici */}
      </div>
    </Layout>
  );
};

export default DashboardPage;
