import React, { useRef, useEffect } from "react";
import "./HospitalForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Voice from "./Voice";
// import { TextareaAutosize } from "@mui/base/TextareaAutosize";
// import Textarea from '@mui/joy/Textarea';

const InputForm = ({ handleInputChange, formData, handleBulletPoint }) => {
  // Create refs for all textareas
  const chiefComplaintRef = useRef(null);
  const illnessRef = useRef(null);
  const physicalRef = useRef(null);
  const diagnosisRef = useRef(null);
  const medicineRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const testRef = useRef(null);

  // Adjust height for a given ref
  const adjustHeight = (ref) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  };

  // Single useEffect to handle all ref adjustments
  useEffect(() => {
    const refs = [
      chiefComplaintRef,
      illnessRef,
      physicalRef,
      diagnosisRef,
      ...medicineRefs,
      testRef,
    ];

    refs.forEach((ref) => adjustHeight(ref));

    // Optionally, you can add a dependency array if necessary
  }, [formData]);

  return (
    <>
      <div className="container mt-3 cont">
        {/* *******************Patient Information Section******************* */}
        <div className="row mb-4">
          <div className="col-md-6">
            {/* <input
            type="text"
            className="form-control"
            name="patId"
            value={formData.patId}
            onChange={handleInputChange}
            placeholder="Patient Id"
          /> */}

            <TextField
              id="outlined-basic"
              label="Patient Id"
              variant="outlined"
              type="text"
              className="form-control"
              name="patId"
              value={formData.patId}
              onChange={handleInputChange}
              placeholder="Patient Id"
            />
          </div>
          <div className="col-md-6">
            {/* <input
            type="text"
            className="form-control"
            name="patName"
            value={formData.patName}
            onChange={handleInputChange}
            placeholder="Patient Name"
          /> */}

            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              className="form-control"
              name="patName"
              value={formData.patName}
              onChange={handleInputChange}
              placeholder="Patient Name"
            />
          </div>
        </div>

        <div className="row mb-2"></div>

        <div className="row mb-6">
          <div className="col-md-2">
            {/* <input
            type="text"
            className="form-control"
            name="patage"
            value={formData.patage}
            onChange={handleInputChange}
            placeholder="Age"
          /> */}

            <TextField
              id="outlined-basic"
              label="Sex"
              variant="outlined"
              type="text"
              className="form-control"
              name="patsex"
              value={formData.patage}
              onChange={handleInputChange}
              placeholder="Age"
            />
          </div>

          <div className="col-md-2">
            {/* <input
            type="text"
            className="form-control"
            name="patage"
            value={formData.patage}
            onChange={handleInputChange}
            placeholder="Age"
          /> */}

            <TextField
              id="outlined-basic"
              label="Date"
              variant="outlined"
              type="text"
              className="form-control"
              name="patage"
              value={formData.visitDate}
              onChange={handleInputChange}
              placeholder="Age"
            />
          </div>

          <div className="col-md-2">
            {/* <input
            type="text"
            className="form-control"
            name="patage"
            value={formData.patage}
            onChange={handleInputChange}
            placeholder="Age"
          /> */}

            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              type="text"
              className="form-control"
              name="patage"
              value={formData.patage}
              onChange={handleInputChange}
              placeholder="Age"
            />
          </div>
          <div className="col-md-2">
            {/* <input
            type="text"
            className="form-control"
            name="patweight"
            value={formData.patweight}
            onChange={handleInputChange}
            placeholder="Weight"
          /> */}

            <TextField
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              type="text"
              className="form-control"
              name="patweight"
              value={formData.patweight}
              onChange={handleInputChange}
              placeholder="Weight"
            />
          </div>
          <div className="col-md-2">
            {/* <input
            type="text"
            className="form-control"
            name="patheight"
            value={formData.patheight}
            onChange={handleInputChange}
            placeholder="Height"
          /> */}

            <TextField
              id="outlined-basic"
              label="Height"
              variant="outlined"
              type="text"
              className="form-control"
              name="patheight"
              value={formData.patheight}
              onChange={handleInputChange}
              placeholder="Height"
            />
          </div>
          <div className="col-md-2">
            {/* <input
            type="text"
            className="form-control"
            name="patsPo2"
            value={formData.patsPo2}
            onChange={handleInputChange}
            placeholder="Spo2"
          /> */}

            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              type="text"
              className="form-control"
              name="patsPo2"
              value={formData.patsPo2}
              onChange={handleInputChange}
              placeholder="Spo2"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            {/* <input
            type="text"
            className="form-control"
            name="patbp"
            value={formData.patbp}
            onChange={handleInputChange}
            placeholder="Blood Pressure (S/D)"
          /> */}

            <TextField
              id="outlined-basic"
              label="Blood Pressure"
              variant="outlined"
              type="text"
              className="form-control"
              name="patbp"
              value={formData.patbp}
              onChange={handleInputChange}
              placeholder="Blood Pressure (S/D)"
            />
          </div>
          <div className="col-md-6">
            {/* <input
            type="text"
            className="form-control"
            name="pattemp"
            value={formData.pattemp}
            onChange={handleInputChange}
            placeholder="Temperature"
          /> */}

            <TextField
              id="outlined-basic"
              label="Temperature"
              variant="outlined"
              type="text"
              className="form-control"
              name="pattemp"
              value={formData.pattemp}
              onChange={handleInputChange}
              placeholder="Temperature"
            />
          </div>
        </div>

        {/* Medicine Section */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="medicine-section">
              <h5>Medicine | Dosage | Duration | Instruction</h5>
              <div className="medicine-placeholder">
                {medicineRefs.map((ref, index) => (
                  <TextField
                    key={index}
                    ref={ref}
                    name={`medicine${index}`}
                    // value={formData.medicine}
                    style={{
                      width: "100px",
                      overflow: "hidden",
                      height: "50px",
                      marginRight: "20px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms, Diagnosis, Tests */}
        <div className="row under-form-new">
          <div className="col-md-6">
            <textarea
            className="form-control"
            name="symptoms"
            ref={chiefComplaintRef}
            value={formData.symptoms}
            onChange={handleInputChange}
            placeholder="Symptoms"
            rows="4"
          />

{/* <TextField name="Outlined" placeholder="Type in here…" variant="outlined" /> */}
          </div>
          <div className="col-md-6">
            <textarea
              className="form-control"
              name="diagnosis"
              ref={diagnosisRef}
              value={formData.diagnosis}
              onChange={handleInputChange}
              placeholder="Diagnosis"
              rows="4"
            />
          </div>
        </div>

        <div className="row under-form-new">
          <div className="col-md-6">
            <textarea
              className="form-control"
              name="test"
              ref={testRef}
              value={formData.test}
              onChange={handleInputChange}
              placeholder="Test"
              rows="4"
            />
          </div>
          <div className="col-md-6">
            <textarea
              className="form-control"
              name="otherInstructions"
              value={formData.otherInstructions}
              onChange={handleInputChange}
              placeholder="Other Instructions"
              rows="4"
            />
          </div>
        </div>
      </div>
      <Voice />
    </>
  );
};

export default InputForm;
