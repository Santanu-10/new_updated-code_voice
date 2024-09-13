// src/App.js
import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import PreviewForm from "./PreviewForm";
import Navbar from "./Navbar";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./Footer";

const App = () => {
  const [formData, setFormData] = useState({
    docfirstName: "",
    docdegree: "",
    patName: "",
    patage: "",
    patsex: "",
    pateaddress: "",
    patphone: "",
    visitDate: "",
    chiefComplaint: "• ",
    illness: "• ",
    physical: "• ",
    diagnosis: "• ",
    medicine: "• ",
    test: "• ",
  });

  // Update formData based on changes from InputForm
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleBulletPoint = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setFormData((prevData) => ({
        ...prevData,
        [field]: `${prevData[field]}\n• `,
      }));
    }
  };

  useEffect(() => {
    const fetchFormData = async () => {
      const response = await fetch("/form.json");
      const data = await response.json();
      setFormData(data);
    };
    fetchFormData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="main-page" >
      
      <div className="under-main-container">
        <div className=" doctor-section" style={{ borderRight: "2px solid #08296C" }}>
          <InputForm
            handleInputChange={handleInputChange}
            formData={formData}
            handleBulletPoint={handleBulletPoint}
          />
        </div>
        {/* <div className="back" style={{ margin: "0", padding: "0" }}> */}
        <div className=" preview-container">
          <PreviewForm formData={formData} />
        </div>
        {/* </div> */}
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default App;
