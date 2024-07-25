import React from 'react';

const AwsInfoCards = () => {
  return (
    <div  className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-8 dark:bg-gray-950 dark:text-white duration-200">
      <h1 className="text-4xl font-bold text-[#FF9900] mb-8">AWS Overview</h1>
      <div className="flex flex-wrap justify-center items-center space-x-4 space-y-4">
        <div data-aos="zoom-in" className="max-w-sm bg-[#232F3E] text-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-[#FF9900] p-4">
            <h2 className="text-2xl font-bold text-center">What is AWS?</h2>
          </div>
          <div className="p-6">
            <p className="mb-4">
              <strong>AWS (Amazon Web Services)</strong> is a comprehensive and widely adopted cloud platform provided by Amazon. It offers over 200 fully-featured services, including computing power, storage options, and networking capabilities, to businesses and developers. AWS services are delivered through a global network of data centers, making it possible to create, deploy, and manage applications in a secure and scalable environment. AWS is used by millions of customers worldwide, ranging from startups to large enterprises, to reduce costs, enhance performance, and drive innovation.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in"  className="max-w-sm bg-[#232F3E] text-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-[#FF9900] p-4">
            <h2 className="text-2xl font-bold text-center">How to Use AWS?</h2>
          </div>
          <div className="p-6">
            <p className="mb-4">
              To use AWS, follow these steps:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Create an AWS Account</strong>: Sign up for an AWS account at the <a href="https://aws.amazon.com/" className="text-[#FF9900] underline">AWS website</a>.</li>
              <li><strong>Access the AWS Management Console</strong>: Log in to the AWS Management Console, which provides a web-based interface to access and manage AWS services.</li>
              <li><strong>Choose Services</strong>: Select the AWS services you need for your application, such as EC2 for computing, S3 for storage, RDS for databases, etc.</li>
              <li><strong>Configure and Deploy</strong>: Configure the selected services according to your requirements and deploy your applications.</li>
              <li><strong>Monitor and Manage</strong>: Use AWS tools like CloudWatch for monitoring, IAM for managing access, and other management tools to maintain and optimize your resources.</li>
              <li><strong>Scale as Needed</strong>: Scale your resources up or down based on demand to ensure efficiency and cost-effectiveness.</li>
            </ul>
          </div>
        </div>
        <div data-aos="zoom-in" className="max-w-sm bg-[#232F3E] text-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl m-2">
          <div className="bg-[#FF9900] p-4">
            <h2 className="text-2xl font-bold text-center">Benefits of Using AWS</h2>
          </div>
          <div className="p-6">
            <p className="mb-4">
              AWS provides numerous benefits, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Scalability</strong>: AWS allows you to easily scale your applications up or down based on demand, ensuring optimal performance and cost-efficiency.</li>
              <li><strong>Cost-Effectiveness</strong>: With a pay-as-you-go pricing model, AWS helps you avoid large upfront investments and only pay for what you use.</li>
              <li><strong>Flexibility and Choice</strong>: AWS offers a wide range of services and tools that cater to various use cases, giving you the flexibility to choose the right solutions for your needs.</li>
              <li><strong>Global Reach</strong>: AWS has a global network of data centers, enabling you to deploy applications worldwide with low latency and high availability.</li>
              <li><strong>Security</strong>: AWS provides robust security measures, including data encryption, compliance certifications, and dedicated security services to protect your data and applications.</li>
              <li><strong>Innovation</strong>: AWS continuously innovates by adding new services and features, allowing you to leverage the latest technologies to stay competitive.</li>
              <li><strong>Reliability</strong>: AWS's infrastructure is designed for high availability and reliability, ensuring that your applications remain up and running even in the face of disruptions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwsInfoCards;
