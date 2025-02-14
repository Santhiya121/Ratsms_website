import React from "react";
import CountUp from "react-countup";

export default function Partner() {
  return (
    <section className=" text-center bg-white py-6 w-full sm:h-96 h-full pt-20">
      <p className="text-xl sm:text-3xl md:text-4xl font-roboto text-black mb-8">
        Our Global Reach
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-20 ">
        {[
          { icon: 'fas fa-users', label: 'Global Clients', value: 37350 },
          { icon: 'fas fa-id-card-alt', label: 'Global Sender ID', value: 20346 },
          { icon: 'fas fa-mobile-alt', label: 'Telecom Brands', value: 10 },
          { icon: 'fas fa-paper-plane', label: 'Messages Sent', value: 99458538 },
          { icon: 'fas fa-check-circle', label: 'Messages Delivered', value: 87577659 },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-2xl  rounded-xl flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:bg-gray-200"
          >
            <div className="text-black text-3xl mb-4 transform transition-transform duration-500 hover:rotate-12">
              <i className={stat.icon}></i>
            </div>
            <p className="text-base sm:text-xl font-semibold text-gray-800 mb-2">
              {stat.label}
            </p>
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                separator=","
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
