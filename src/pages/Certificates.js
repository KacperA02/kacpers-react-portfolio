import React from "react";
import { useMediaQuery } from "react-responsive";

const certificatesData = [
  {
    title: "CV",
    src: "/certificates/KacperCV1.pdf",
  },
  {
    title: "Cisco Networking Essentials",
    src: "/certificates/cisco.pdf",
  },
  {
    title: "LinkedIn Paper Prototyping",
    src: "/certificates/paperproto.pdf",
  },
  {
    title: "LinkedIn Creating Personas",
    src: "/certificates/creatingP.pdf",
  },
];

const Certificates = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Certificates & CV</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificatesData.map(({ title, src }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <h2 className="text-2xl font-semibold p-4 border-b border-gray-200 bg-gray-50">
              {title}
            </h2>

            {isMobile ? (
              <div className="p-4">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-lg"
                >
                  Open {title}
                </a>
              </div>
            ) : (
              <iframe
                title={title}
                src={src}
                className="w-full bg-white"
                style={{ height: "400px" }}
                frameBorder="0"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
