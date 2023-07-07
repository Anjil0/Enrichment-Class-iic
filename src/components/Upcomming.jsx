import React, { useState, useEffect } from 'react';

const Upcoming = () => {
  return (
    <div>
      <ViewSavedData />
    </div>
  );
};

const ViewSavedData = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormDataList(parsedData);
    }
  }, []);

  const today = new Date();
  today.setDate(today.getDate() + 1); // Set today to tomorrow
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(today.getDate() + 7); // Set one week from now

  const birthdaysSoon = formDataList.filter((formData) => {
    const birthdayDate = new Date(formData.birthDay);
    return birthdayDate >= today && birthdayDate <= oneWeekFromNow;
  });
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
  return (<>
    <div style={styleswhole}>
      <h2 style={style}>Birthdays Soon:</h2>
      {birthdaysSoon.length > 0 ? (
        birthdaysSoon.map((formData, index) => (
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
        <p>No birthdays coming up in the next week.</p>
      )}
    </div>
    </>
  );
};

export default Upcoming;