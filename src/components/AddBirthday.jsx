import "./css/addbirthday.css";
// import { Link } from "react-router-dom";
import React, { useState } from "react";

const AddBirthday = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
    birthDay: "",
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
    const newdata = [...existingData, formData];
    console.log(JSON.stringify(newdata));

    //save updated data in a local Storage as JSON
    localStorage.setItem("formData", JSON.stringify(newdata));
    console.log(JSON.parse(localStorage.getItem("formData")));
    // Reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      birthDay: "",
      message: "",
      photo: "",
    });
  };

  const handleFileChange = (e) => {
    const File = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const photoURL = reader.result;
      setFormData((prevData) => ({ ...prevData, photo: photoURL }));
    };
    reader.readAsDataURL(File);
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
            name="birthDay"
            value={formData.birthDay}
            onChange={handleInputChange}
            type="date"
          />
        </div>
        <div className="div">
          <label>Upload Photo:</label>
          <input
            className="input"
            name="photo"
            onChange={handleFileChange}
            type="file"
            accept="image/*"
          />
        </div>
        {/* <Link to="/All-birthday"> */}
        <button className="btn">
          Add
          {/* <Link to="/All-birthday">Add</Link> */}
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
