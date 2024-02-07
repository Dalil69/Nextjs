import React from 'react';

interface DataItem {
  id: number;
  name: string;
  
}

interface DataTableProps {
  data: DataItem[]; 
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        {/* En-têtes de tableau */}
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Lignes de données */}
      </tbody>
    </table>
  );
};

export default DataTable;
