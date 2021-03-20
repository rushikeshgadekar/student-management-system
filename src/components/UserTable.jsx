import React from "react";

const UserTable = ({ data }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
        {data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default UserTable;
