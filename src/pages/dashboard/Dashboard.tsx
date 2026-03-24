import React from 'react';
import FileUpload from '../../components/features/FileUpload/FileUpload';
import { SEO } from '../../components/common/SEO';

const Dashboard: React.FC = () => {
  return (
    <>
      <SEO
        title="Convert files"
        description="Free online file converter - simple, fast, and secure."
      />
      <div className="min-h-screen pt-20 pb-10">
        <div className="container mx-auto px-4">
          <FileUpload 
            onConversionComplete={(url) => {
              console.log('Conversion complete:', url);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;