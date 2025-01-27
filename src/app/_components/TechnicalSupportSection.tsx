import React from "react";
import { FaUserFriends, FaRocket, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaUserFriends className="text-5xl text-white mb-4" />,
    title: "Our team shares values of success",
    description: "At Wisematic, our team is focused on working with you to achieve success."
  },
  {
    icon: <FaRocket className="text-5xl text-white mb-4" />,
    title: "We’re on a mission to power our customers",
    description: "Whatever your business needs, we're here for you and want to help."
  },
  {
    icon: <FaShieldAlt className="text-5xl text-white mb-4" />,
    title: "We’re here to protect your data online",
    description: "You can trust in our world-class data protection methods and processes."
  }
];

const TechnicalSupportSection = () => {
  return (
    <div className="relative flex flex-col items-center text-center py-40 bg-black">

      {/* <div className="relative z-10 flex items-center space-x-2 mb-4">
        <span className="text-2xl text-black">+</span>
        <span className="text-2xl text-black">✱</span>
        <span className="text-2xl text-black">✹</span>
      </div> */}

      <h2 className="relative z-10 text-5xl mb-16 text-white">Powerful Technical Support</h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/30 z-10 text-white text-center backdrop-blur-lg rounded-xl shadow-lg p-10 flex flex-col items-center w-96 h-80 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl "
          >
            {card.icon}
            <h3 className="text-2xl text-white mb-2">{card.title}</h3>
            <p className="text-base text-gray-400 ">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSupportSection;