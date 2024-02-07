import React from 'react';
import Layout from '../app/layout';
import Sidebar from '../app/components/Sidebar'; // Importez votre composant Sidebar
import MyChart from '../app/components/MyChart';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="flex">
        {/* Ajoutez votre barre latérale à gauche */}
        <Sidebar />
        <div className="p-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <MyChart /> {/* Utilisez le composant MyChart ici */}
          {/* Vous pouvez ajouter plus de contenu ou d'autres composants ici */}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
