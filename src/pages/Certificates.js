import React from "react";
import { motion } from "framer-motion";

const certificatesData = [
  {
    title: "CV",
    src: "../certificates/KacperCV1.pdf",
  },
  {
    title: "Cisco Networking Essentials",
    src: "../certificates/cisco.pdf",
  },
  {
    title: "LinkedIn Paper Prototyping",
    src: "../certificates/paperproto.pdf",
  },
  {
    title: "LinkedIn Creating Personas",
    src: "../certificates/creatingP.pdf",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger animation
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Certificates = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Certificates & CV</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificatesData.map(({ title, src }, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <h2 className="text-2xl font-semibold p-4 border-b border-gray-200 bg-gray-50">
              {title}
            </h2>
            <iframe
              title={title}
              src={src}
              className="w-full"
              style={{ height: "400px" }}
              frameBorder="0"
            ></iframe>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
