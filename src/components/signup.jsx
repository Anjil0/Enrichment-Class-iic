import React from "react";

const signup = () => {
  const handlechg = () => {
    var enteredname = document.getElementById("name").value;
    console.log("Name Changed: " + enteredname);
  };
  return (
    <>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" onChange={handlechg} />
    </>
  );
};

export default signup;
