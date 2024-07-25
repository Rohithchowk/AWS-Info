import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";



const faqs = [
  {
    question: 'What is AWS?',
    answer: (
      <ul className="list-disc list-inside">
        <li>Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon.</li>
        <li>AWS offers a wide range of cloud services including computing power, storage, and databases.</li>
        <li>These services are hosted on Amazon’s global infrastructure, allowing businesses to deploy and manage applications and resources efficiently.</li>
        <li>AWS’s scalable and flexible nature supports various use cases from simple websites to complex enterprise applications.</li>
      </ul>
    )
  },
  {
    question: 'How does AWS benefit businesses?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>Scalability:</strong> AWS provides the ability to scale resources up or down as needed, handling varying loads without over-provisioning. This helps manage traffic spikes and optimize costs.</li>
        <li><strong>Cost-Effectiveness:</strong> With AWS’s pay-as-you-go pricing model, businesses only pay for the resources they use, eliminating large upfront investments and reducing operational costs.</li>
        <li><strong>Global Reach:</strong> AWS has a vast network of data centers worldwide, ensuring low-latency access to applications and data for users globally, enhancing performance and user experience.</li>
        <li><strong>Security:</strong> AWS offers robust security features including data encryption, network security, and compliance with global standards, helping businesses safeguard data and meet regulatory requirements.</li>
        <li><strong>Innovation:</strong> AWS continuously evolves by adding new services and features, providing businesses with access to the latest technology advancements.</li>
      </ul>
    )
  },
  {
    question: 'How can I get started with AWS?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>Sign Up:</strong> Create an AWS account by visiting the AWS website and completing the registration process, which includes providing billing information and selecting a support plan.</li>
        <li><strong>Explore the AWS Management Console:</strong> Familiarize yourself with the AWS Management Console, a web-based interface for accessing and managing AWS services.</li>
        <li><strong>Use AWS Documentation:</strong> AWS provides extensive documentation and tutorials. These resources are valuable for learning how to use different AWS services and understanding best practices.</li>
        <li><strong>Take Advantage of the AWS Free Tier:</strong> The AWS Free Tier offers limited free access to various AWS services, allowing you to experiment and learn without incurring costs.</li>
        <li><strong>Start Building:</strong> Begin with small projects to practice using AWS services, deploy simple applications, set up databases, or experiment with other services to build your skills.</li>
      </ul>
    )
  },
  {
    question: 'What are the main pricing models for AWS?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>Pay-As-You-Go:</strong> You pay only for the resources you use, with no upfront costs or long-term commitments. This model provides flexibility and is ideal for applications with variable workloads.</li>
        <li><strong>Reserved Instances:</strong> Purchase instances for a one- or three-year term at a discounted rate compared to on-demand pricing. This model is beneficial for applications with predictable usage patterns.</li>
        <li><strong>Savings Plans:</strong> Commit to a specific amount of usage over a one- or three-year period to receive lower rates. Savings Plans offer more flexibility than Reserved Instances and apply to a broader range of services.</li>
        <li><strong>Spot Instances:</strong> Purchase unused EC2 capacity at reduced prices. Spot Instances are cost-effective but can be interrupted if AWS needs the capacity back, making them suitable for flexible workloads.</li>
        <li><strong>Free Tier:</strong> AWS provides a Free Tier with limited access to certain services at no cost, allowing users to learn and experiment with cloud services without incurring significant costs.</li>
      </ul>
    )
  },
  {
    question: 'How secure is AWS?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>Data Encryption:</strong> AWS offers encryption options for data both at rest and in transit, ensuring that sensitive information is protected from unauthorized access.</li>
        <li><strong>Network Security:</strong> AWS provides network security features such as security groups, network access control lists (ACLs), and firewalls to protect against unauthorized access and attacks.</li>
        <li><strong>Compliance:</strong> AWS complies with numerous global security standards and certifications, including ISO 27001, GDPR, and HIPAA, helping businesses meet regulatory and industry requirements.</li>
        <li><strong>Identity and Access Management:</strong> AWS Identity and Access Management (IAM) allows you to control user access to AWS resources, ensuring that only authorized individuals can access specific services and data.</li>
        <li><strong>Monitoring and Logging:</strong> AWS provides tools like CloudTrail and CloudWatch to monitor and log activity across your AWS environment, aiding in security management and incident response.</li>
      </ul>
    )
  },
  {
    question: 'What is the AWS Free Tier?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>12-Month Free Tier:</strong> New users get access to a limited quantity of AWS services free of charge for the first 12 months. This includes services like EC2, S3, and RDS with specific usage limits.</li>
        <li><strong>Always Free:</strong> Some AWS services are always available for free within specified limits, such as 1 million requests per month for AWS Lambda and 1 GB of outbound data transfer per month.</li>
        <li><strong>Trials:</strong> Certain AWS services offer free trial periods with additional usage limits, allowing users to explore features and evaluate services before committing to a paid plan.</li>
        <li>The Free Tier is designed to help new users get started with AWS, experiment with different services, and understand how cloud computing can benefit their needs without incurring significant costs.</li>
      </ul>
    )
  },
  {
    question: 'Can I use AWS for personal projects?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>Web Hosting:</strong> AWS can be used to host personal websites, blogs, or portfolios. Services like Amazon S3 for static sites and EC2 for dynamic content are suitable for personal web projects.</li>
        <li><strong>Learning and Experimentation:</strong> The AWS Free Tier provides an opportunity for individuals to learn and experiment with cloud services. It is ideal for practicing and gaining experience with AWS without incurring costs.</li>
        <li><strong>Development and Testing:</strong> AWS offers a flexible environment for developing and testing applications. You can use various AWS services to build, deploy, and test personal projects.</li>
        <li><strong>Data Backup:</strong> AWS provides secure storage solutions such as S3 and Glacier, which can be used to back up personal data and ensure its safety and accessibility.</li>
        <li>AWS’s cost-effective pricing and Free Tier make it accessible for personal projects, providing a platform to explore cloud computing and build applications.</li>
      </ul>
    )
  },
  {
    question: 'How do I get support for AWS?',
    answer: (
      <ul className="list-disc list-inside">
        <li><strong>AWS Documentation:</strong> AWS offers a comprehensive library of documentation, including user guides, API references, and tutorials, to help users understand and utilize AWS services effectively.</li>
        <li><strong>AWS Forums:</strong> Community forums allow users to ask questions and share knowledge with other AWS users. These forums are valuable for finding solutions to common issues and learning from peers.</li>
        <li><strong>AWS Support Center:</strong> Users can create support tickets for technical issues through the AWS Support Center. Support plans include:
          <ul className="list-disc list-inside ml-6">
            <li><strong>Basic Support:</strong> Access to documentation and community forums.</li>
            <li><strong>Developer Support:</strong> Email access to AWS support for development-related questions and guidance.</li>
            <li><strong>Business Support:</strong> 24/7 access to Cloud Support Engineers for technical assistance and additional resources.</li>
            <li><strong>Enterprise Support:</strong> Includes all Business Support features plus a dedicated Technical Account Manager and proactive support.</li>
          </ul>
        </li>
        <li><strong>Training and Certification:</strong> AWS provides training courses and certification programs to help users gain expertise in AWS services and validate their skills, enhancing their ability to use AWS effectively.</li>
      </ul>
    )
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-[#FEF3E2] rounded-lg shadow-lg dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <h1 className="text-3xl font-bold text-[#FF9900] mb-6 text-center dark:text-white">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-[#FF9900] rounded-lg">
            <div
              className="flex justify-between items-center p-4 bg-[#FF9900] text-white cursor-pointer hover:bg-[#e68a00]"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {openIndex === index ? (
                <FaMinus className="h-6 w-6" />
              ) : (
                <FaPlus className="h-6 w-6" />
              )}
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-800">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
