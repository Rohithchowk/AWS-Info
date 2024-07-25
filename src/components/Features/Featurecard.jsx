import React from 'react';

const AwsFeaturesCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-[#000] mb-8 dark:text-white">Features</h1>
      <div id="features" className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
        <div className="max-w-sm bg-[#FEF3E2] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl font-bold text-[#FF9900] text-center">Scalability</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Amazon Web Services (AWS) offers seamless scalability, allowing businesses to easily scale up or down based on demand. This ensures that you only pay for what you use.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#FEF3E2] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl font-bold text-[#FF9900] text-center">Flexibility</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              AWS provides a wide range of services, allowing you to choose the solutions that best fit your business needs. This flexibility helps in deploying the right services for your applications.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#FEF3E2] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl font-bold text-[#FF9900] text-center">Cost-Effectiveness</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              With AWS, you only pay for the resources you use, making it a cost-effective solution. There are no upfront costs or long-term commitments, allowing you to manage your budget efficiently.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#FEF3E2] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl font-bold text-[#FF9900] text-center">Global Reach</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              AWS operates in multiple regions worldwide, allowing you to deploy your applications globally with low latency and high availability.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#FEF3E2] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl font-bold text-[#FF9900] text-center">Security</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              AWS offers robust security measures, including data encryption, network firewalls, and compliance with global security standards to protect your data.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-[#FEF3E2] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-gray-800 p-4">
            <h2 className="text-2xl font-bold text-[#FF9900] text-center">Innovation</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              AWS continuously innovates by adding new services and features, helping businesses stay ahead of the curve with the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwsFeaturesCard;
