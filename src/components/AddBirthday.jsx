import "./css/addbirthday.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const AddBirthday = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    birthDate: "2015-09-13",
    photo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //Retrive existing form data from local storage
    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log(JSON.parse(localStorage.getItem("formData")));
    
    //Add new form data to the array
    const newdata = [...existingData, ...formData];
    console.log(JSON.stringify(newdata));

    //save updated data in a local Storage as JSON
    localStorage.setItem("formData", JSON.stringify(newdata));
    console.log(JSON.parse(localStorage.getItem("formData")));

  };
  const style = {
    textAlign: "center",
    margin: "21px auto",
    padding: "10px 0px",
    backgroundColor: "#2196F3",
    color: "wheat",
    borderRadius: "10px",
    width: "50%",
  };

  return (
    <>
      <form style={style} onSubmit={handleFormSubmit}>
        <div className="div">
          <label>First Name:</label>
          <input
            name="firstName"
            className="input"
            type="text"
            placeholder="Firstname"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="div">
          <label>Last Name:</label>
          <input
            name="lastName"
            className="input"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Lastname"
            required
          />
        </div>
        <div className="div">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            className="textArea"
            cols="30"
            rows="5"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="div">
          <label>Birth Date:</label>
          <input
            className="input"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            type="date"
          />
        </div>
        <div className="div">
          <label>Upload Photo:</label>
          <input
            className="input"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            type="text"
            aria-required
          />
        </div>
        {/* <Link to="/All-birthday"> */}
        <button className="btn">
          <Link to="/All-birthday">Add</Link>
        </button>
        {/* </Link> */}
        <button className="btn" type="Clear">
          Clear
        </button>
      </form>
    </>
  );
};

export default AddBirthday;
