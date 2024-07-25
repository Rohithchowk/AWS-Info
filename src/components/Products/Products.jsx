import React from "react";
import Img1 from "../../assets/women/EC2.jpg";
import Img2 from "../../assets/women/s3.png";
import Img3 from "../../assets/women/awsaurora.png";
import Img4 from "../../assets/women/dynamodb.png";
import Img5 from "../../assets/women/vpc.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Amazon EC2",
    color: "Amazon EC2 provides scalable computing capacity in the AWS cloud, allowing for rapid development and deployment",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Amazon S3",
    color: "Amazon S3 offers industry-leading object storage with high scalability, data availability, security, and performance",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Amazon Aurora",
    color: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, combining performance and availability with simplicity.",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Amazon Dynamo DB",
    color: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Amazon VPC",
    color: "Amazon VPC allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network you define",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div data-aos="zoom-in" className="mt-14 mb-12 ">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            AWS Products& Services for you& your Business !
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Featured Services
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
