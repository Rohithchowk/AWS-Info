import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Netflix",
    text: "Utilizes AWS for streaming services, data processing, and content delivery, enabling high availability and scalability for millions of users.",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECB//EADMQAQABAgQBCwIGAwEAAAAAAAABAgMEBRExcRITISIyNEFRgaGxcpEUFVNhwdEzQvAG/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAwYHAgH/xAAwEQEAAQICCAMHBQAAAAAAAAAAAQIDBBEFEhMhMVGBsTJB0SI0cXKh4fAGFBVhkf/aAAwDAQACEQMRAD8A/GwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ2AF9ayTDV26audvdMecf0+/wAhw/6t77x/TB+5trmNA42YziI/1nh3xlicNirlmdZimeiZ8Y8DB2acRfi3VMxExM6wy60Zayr2Fe12OXtZ5dXAW35Va/Vuezji8BbsYeq5TXXMxp0Tp5vEXqJnJMuaLxNuia6o3Rv4q8BlVwAAAAAAAAAAAAAATtITtIS1mCr6vInyiYSlfar5uq3V4bTwlYKiuN7p+Gqzoy5KP/0VjSq1iIjfqVfMfygZX3yn6ZaLMLH4nB3bcdqY1p4xszuVd8p+mUyzXrWZjk1fSeG2Wk7dccKpievn69V2i5n3K5xj5hKRcz7lc4x8ww2/HCzxnu1z5Z7KMBYtFAAAAAAAAAAAAAACdpCdpCWk01txH7JuGr5yzTVO+08UOnsxwdcFXpcrtz49MKuqM4dGw9WrXH9pjPzZ/D51XTEdWqJqp4S0CBmNnW5ZxER00a0zwn/vctVZTMc3zSWH2tFFccaKonp5+vR4i5n3K5xj5hJidYRsz7lc4x8w90eOETGe7XPlnsowFi0UAAAAAAAAAAAAAAJ2kJ2kJaWnsxwfPK5u7Rc8pfVPZjg8rjWFb5ug79WMlk+LtHOW6qJ8YR8sv89humetbqmifTb20S2GYmmcljauU37UVxwmFZbno0neHDM+5XOMfMJd+nkYmryq60ImZ9yucY+YSKPFCmxkTThrlM+UT2UYCwaMAAAAAAAAAAAAAAE7SE7SEtLT2Y4PXlPZjg9VjoVPCEHJb/IzC/Zmei5MzHGJn+F8x/OTZxk3ad6Lkz7tdRVTXRTXROtNUaxP7PeJoymKuaJ+n8Tr2q7M8aZ+k/fNxxtOtuK43pn2VuZ9yuenzC5qpiqmaZ2mNFLmUTGBuRO8TET94eLM+1CVpSnKzcnnTPZSALNz4AAAAAAAAAAAAAAJ2kJ2BpaezHB6q5zXSIimz96nzOa3fC1RHrMoOxr5Nw/lsJTGWt9JQr3+a59c/LQ5Df53Bc3M9a1PJ9PBnaquVVVVO8zMu+CxlzBV1V2opnlRpMVbJF63r0ZRxUejMdThcXtKvDOcT+fFrVVnlHJw1yfCrkz66wixn17/AGsW54VS547NYxmGm1NjkVTMTExVr48Ea3YuU1xMw2HG6XwV/DV0U175ict08vgrAE9pQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z",
  },
  {
    id: 2,
    name: "Amazon",
    text: "Leverages AWS to run its own e-commerce platform, supporting a vast range of operations from inventory management to customer service.",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Adobe",
    text: "Employs AWS to deliver cloud-based solutions and services, including Adobe Creative Cloud and Adobe Document Cloud.",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: 5,
    name: "NASA",
    text: "Employs AWS for data storage, processing, and analytics to support various space missions and research initiatives.",
    img: "data:image/png;base64,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",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Companies using 
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            AWS
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Many MNC and startup companies are using our services for their business applications !!!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    .
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
