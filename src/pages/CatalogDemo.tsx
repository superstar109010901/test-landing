import React from 'react';
import CatalogListLeft from '../components/catalog_list_left';

const CatalogDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Catalog List Left Component Demo
        </h1>
        <CatalogListLeft />
      </div>
    </div>
  );
};

export default CatalogDemo;
