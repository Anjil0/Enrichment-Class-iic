import React, { useState, useEffect } from "react";
import Upcomming from "./Upcomming";
// import "./css/All.css"

const Home2 = () => {
  return (
    <div>
      <ViewSavedData />
      <Upcomming />
    </div>
  );
};

const ViewSavedData = () => {
  const [formDataList, setFormDataList] = useState([]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormDataList(parsedData);
    }
  }, []);

  const today = new Date();
  console.log(formDataList);
  const todayBirthdays = formDataList.filter(
    (formData) => formData.birthDay === formatDate(today)
  );

  const styleswhole = {
    padding: "10px",
    margin: "30px auto",
    width: "500px",
    border: "1px solid #ccc",
  };

  const style = {
    color: "brown",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
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
    margin: '10px 0px 10px 20px',
}
  return (
    <>
      <div style={styleswhole}>
        <h2 style={style}>Today's Birthdays:</h2>
        {todayBirthdays.length > 0 ? (
          todayBirthdays.map((formData, index) => (
            <div style={divperson} key={index}>
              {formData.photo && (
                <img
                  style={imgstyle}
                  src={formData.photo}
                  alt="Birthday celebrant"
                />
              )}
              <div style={detailsstyles}>
                <p>Entry {index + 1}</p>
                <p>First Name: {formData.firstName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Birthday: {formData.birthDay}</p>
                <p>Message: {formData.message}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No birthdays today.</p>
        )}
      </div>
    </>
  );
};

export default Home2;
