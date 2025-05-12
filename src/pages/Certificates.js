import React from "react";

const Certificates = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold mb-6  flex justify-center">CV</h1>
      <iframe
        title="CV"
        src="../certificates/KacperCV1.pdf"
        width="100%"
        height="500px"
      ></iframe>
       <h1 className="text-4xl font-bold mb-6 mt-6 flex justify-center">Cisco  Networking Essentials</h1>
      <iframe
        title="Cisco cert"
        src="../certificates/cisco.pdf"
        width="100%"
        height="500px"
      ></iframe>
       <h1 className="text-4xl font-bold mb-6 mt-6 flex justify-center">Linkedin Paper prototyping</h1>
      <iframe
        title="Linkedin cert"
        src="../certificates/paperproto.pdf"
        width="100%"
        height="500px"
      ></iframe>
          <h1 className="text-4xl font-bold mb-6 mt-6 flex justify-center">Linkedin Creating personas</h1>
      <iframe
        title="Linkedin cert"
        src="../certificates/creatingP.pdf"
        width="100%"
        height="500px"
      ></iframe>
    
    </div>
    
  );

};

export default Certificates;
