import React from "react";
import { Link } from 'react-router-dom'

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
  fontSize: "30px"
}
const Addmore = () => {
  return (
    <>
      <Link to="/add-birthday">
        <button style={bottomdiv} >Add More</button>
      </Link>
    </>
  );
};

const DisplayBirthday = () => {
  return (
    <>
      <div style={topdiv}>
       <Addmore/>
      </div>
      <div style={divperson}>
        <img
          style={imgstyle}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="PIc"
        />
        <div style={detailsstyles}>
          <h2 style={{ color: "brown" }}>John Doe</h2>
          <p style={{ color: "brown", paddingTop: "5px" }}>DOB:- 12/12/2020</p>
          <p style={{ color: "brown", paddingTop: "5px" }}>Age:- 21</p>
          <p
            style={{
              paddingTop: "5px",
              color: "#777",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Message: Happy Birthday Boss
          </p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div style={divperson}>
        <img
          style={imgstyle}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="PIc"
        />
        <div style={detailsstyles}>
          <h2 style={{ color: "brown" }}>John Doe</h2>
          <p style={{ color: "brown", paddingTop: "5px" }}>DOB:- 12/12/2020</p>
          <p style={{ color: "brown", paddingTop: "5px" }}>Age:- 21</p>
          <p
            style={{
              paddingTop: "5px",
              color: "#777",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Message: Happy Birthday Boss
          </p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div style={divperson}>
        <img
          style={imgstyle}
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="PIc"
        />
        <div style={detailsstyles}>
          <h2 style={{ color: "brown" }}>John Doe</h2>
          <p style={{ color: "brown", paddingTop: "5px" }}>DOB:- 12/12/2020</p>
          <p style={{ color: "brown", paddingTop: "5px" }}>Age:- 21</p>
          <p
            style={{
              paddingTop: "5px",
              color: "#777",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Message: Happy Birthday Boss
          </p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DisplayBirthday;
