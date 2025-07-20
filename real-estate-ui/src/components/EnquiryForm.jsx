import React, { useState } from "react";

const EnquiryForm = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)} className="btn btn-secondary">Enquire</button>
      {show && (
        <div className="modal">
          <div className="modal-content p-4 border shadow bg-white">
            <h3>Enquiry Form</h3>
            <input placeholder="Your Name" className="block mb-2" />
            <input placeholder="Email" className="block mb-2" />
            <textarea placeholder="Message" className="block mb-2"></textarea>
            <button onClick={() => setShow(false)}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
