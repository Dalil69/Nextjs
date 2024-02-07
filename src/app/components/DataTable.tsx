import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Ajoutez plus de colonnes ici */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            {/* Ajoutez plus de cellules ici */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
