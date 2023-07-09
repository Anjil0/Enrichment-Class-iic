import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/All.css";
import "./css/addbirthday.css";

const style = {
  textAlign: "center",
  margin: "21px auto",
  padding: "10px 0px",
  backgroundColor: "green",
  color: "wheat",
  borderRadius: "20px",
  width: "100%",
};

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
  width: "60%",
  padding: "2em",
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
  const [editedIndex, setEditedIndex] = useState(-1);
  const [editedFormData, setEditedFormData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    message: "",
    photo: "",
  });

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
    localStorage.setItem("formData", JSON.stringify(updatedFormDataList));
  };

  const handleEdit = (index) => {
    const formData = formDataList[index];
    setEditedIndex(index);
    setEditedFormData(formData);
  };

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEditedFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const updatedFormDataList = formDataList.map((formData, index) => {
      if (index === editedIndex) {
        return editedFormData;
      }
      return formData;
    });

    setFormDataList(updatedFormDataList);
    localStorage.setItem("formData", JSON.stringify(updatedFormDataList));
    setEditedIndex(-1);
    setEditedFormData({
      firstName: "",
      lastName: "",
      birthDay: "",
      message: "",
      photo: "",
    });
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
            </div>
            {index === editedIndex ? (
              <div style={style}>
                <div className="div">
                  <label>First Name:</label>
                  <input
                    name="firstName"
                    className="input"
                    id="editedFirstName"
                    type="text"
                    placeholder="Firstname"
                    value={editedFormData.firstName}
                    onChange={handleInputchange}
                    required
                  />
                </div>
                <div className="div">
                  <label>Last Name:</label>
                  <input
                    name="lastName"
                    className="input"
                    type="text"
                    value={editedFormData.lastName}
                    onChange={handleInputchange}
                    placeholder="Lastname"
                    required
                  />
                </div>
                <div className="div">
                  <label>Message:</label>
                  <textarea
                    name="message"
                    className="textArea"
                    cols="30"
                    rows="5"
                    value={editedFormData.message}
                    onChange={handleInputchange}
                  ></textarea>
                </div>
                <div className="div">
                  <label>Birth Date:</label>
                  <input
                    className="input"
                    name="birthDay"
                    value={editedFormData.birthDay}
                    onChange={handleInputchange}
                    type="date"
                  />
                </div>
                <div className="div">
                  <label>Upload Photo:</label>
                  <input
                    className="input"
                    name="photo"
                    // onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                  />
                </div>
                {/* <Link to="/All-birthday"> */}
                <button className="btn" onClick={handleSave}>
                  Save
                  {/* <Link to="/All-birthday">Add</Link> */}
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No data Found..</p>
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
