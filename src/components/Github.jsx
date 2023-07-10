import React, { useEffect, useState } from "react";

const Github = () => {
  const [githubbook, setgithubbook] = useState(null);
  useEffect(() => {
    const data = fetch("https://api.github.com/users/Anjil0");
    data
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setgithubbook(data);
        console.log(data);
      });
  }, []);

  // if(!githubbook){
  //   return <h1>No data found</h1>
  // }

  return (
    <div>
      <h1>{githubbook?.login}</h1>
        
    </div>
  );
};

export default Github;
