import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";
const User = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/`)
      .then((res) => {
        const data = res.data;
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Student Details</h2>
      <UserTable data={userData} />
    </>
  );
};

export default User;
