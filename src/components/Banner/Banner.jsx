import React from "react";
import BannerImg from "../../assets/hero/aws.png";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { FaAmazonPay } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              AWS pricing
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaAmazonPay className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>PAY AS YOU GO</p>
                <li>Charges based on actual usage, eliminating upfront investments or long-term commitments.</li>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaAmazonPay className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>FREE TIER</p>
                <li>Offers limited free access to various services, allowing exploration and experimentation without cost.</li>
              
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaAmazonPay className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>ON DEMAND PRICING</p>
                <li>Pay for resources on an hourly or per-second basis without any upfront cost or long-term commitment.</li>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaAmazonPay className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>COST MANAGEMENT TOOLS</p>
                <li>Tools like AWS Cost Explorer and AWS Budgets help monitor, analyze, and manage costs effectively.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
