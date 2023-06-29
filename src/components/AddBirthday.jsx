import React from "react";
import "./css/addbirthday.css";
import { Link } from "react-router-dom";

const AddBirthday = () => {
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
      <form style={style}>
        <div className="div">
          <label>First Name:</label>
          <input
            className="input"
            type="text"
            placeholder="Firstname"
            required
          />
        </div>
        <div className="div">
          <label>Last Name:</label>
          <input
            className="input"
            type="text"
            placeholder="Lastname"
            required
          />
        </div>
        <div className="div">
          <label>Message:</label>
          <textarea
            className="textArea"
            name=""
            id="1"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="div">
          <label>Birth Date:</label>
          <input className="input" type="date" />
        </div>
        <div className="div">
          <label>Upload Photo:</label>
          <input className="input" type="file" aria-required />
        </div>
        <Link to="/All-birthday">
          <button className="btn">Add</button>
        </Link>
        <button className="btn" type="Clear">
          Clear
        </button>
      </form>
    </>
  );
};

export default AddBirthday;
