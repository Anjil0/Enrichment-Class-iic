import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/All.css";

const Addmore = () => {
  return (
    <>
      <Link to="/add-birthday">
        <button style={bottomdiv}>Add More</button>
      </Link>
    </>
  );
};


const divperson = {
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#f4f4f4",
  margin: "10px auto",
  width: "500px",
  border: "1px solid #ccc",
  display: "flex",
};

const imgstyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  margin: "10px",
};
const detailsstyles = {
  margin: "10px 0px 10px 20px",
};

const topdiv = {
  margin: "30px auto",
  textAlign: "center",
};
const bottomdiv = {
  padding: "20px",
  fontSize: "30px",
};

const ViewSavedData = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormDataList(parsedData);
    }
  }, []);

  const handleDelete = (index) => {
    const updatedFormDataList = formDataList.filter(
      (formData, idx) => idx !== index
    );
  
  setFormDataList(updatedFormDataList);
    localStorage.setItem('formData', JSON.stringify(updatedFormDataList));
  };

  return (
    <>
      <div style={topdiv}>
        <Addmore /> 
      </div>
      {formDataList.length > 0 ? (
        formDataList.map((formData, index) => (
          <div key={index} style={divperson}>
            {formData.photo && (
              <img
                src={formData.photo}
                alt="Birthday celebrant"
                style={imgstyle}
              />
            )}
            <div style={detailsstyles}>
              <p>Entry {index + 1}</p>
              <h2 style={{ color: "brown" }}>
                {formData.firstName} {formData.lastName}
              </h2>
              <p style={{ color: "brown", paddingTop: "5px" }}>
                {formData.birthDay}
              </p>
              <p
                style={{
                  paddingTop: "5px",
                  color: "#777",
                  fontStyle: "italic",
                  fontSize: "20px",
                }}
              >
                {formData.message}
              </p>
              <button>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No birthdays registered.</p>
      )}
    </>
  );
};

function DisplayBirthday() {
  return (
    <>
      <ViewSavedData />
    </>
  );
}

export default DisplayBirthday;
