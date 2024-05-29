import React, { useState } from "react";

function EmployeeData() {
  let [employees, setEmployees] = useState([]);
  let getGetEmployeeData = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:4444/employees", reqOption);
    let JSOData = await JSONData.json();
    setEmployees(JSOData);
    console.log(JSOData);
  };
  return (
    <div>
      <form>
        <div>
          <button
            type="button"
            onClick={() => {
              getGetEmployeeData();
            }}
          >
            Get Employee Data
          </button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>id</th>
            <th>ProfilePicture</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>

            <th>Country</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{ele.id}</td>
                <td>
                  <img src={ele.profilepicture} alt="profileimg"></img>
                </td>
                <td>{ele.first_name}</td>
                <td>{ele.last_name}</td>
                <td>{ele.email}</td>
                <td>{ele.age}</td>
                <td>{ele.gender}</td>

                <td>{ele.country}</td>
                <td>₹ {ele.salary}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default EmployeeData;
