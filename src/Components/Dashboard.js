import React from "react";
import "./Dashboard.css";
function Dashboard() {
  const h1style = {
    marginLeft: "2508x",
    color: "#5A4BDA",
    textTransform: "underline",
  };
  return (
    <div id="dashboard-complete">
      {console.log("home page")}
      <h1 style={h1style}>Projects you are presently in</h1>
      <div className="dashboard-main">
        <div className="dashboard-content">
          <h3>Project Domain &nbsp;&nbsp;&nbsp;-- &nbsp; CSE</h3>
          <div className="dash-title">
            <h3>Project title &nbsp;&nbsp;&nbsp; --</h3>
            <p> &nbsp;Websecurity in real time applications </p>
          </div>
          <div className="dash-title">
            <h3>Guding Professor &nbsp;&nbsp;&nbsp;-- </h3>
            <p>&nbsp;Dr. Madhura Vani</p>
          </div>
          <div className="project-descript">
            <h4>Project Description</h4>
            <p>
              Build an application that encrypts text using cryptographic
              algorithms. You can train the application with datasets of leaked
              passwords and weak passwords to test the strength of passwords
              according to the OWASP (Open Web Application Security Project)
              standards1.
            </p>
          </div>
        </div>
      </div>

      <div className="dashboard-resources">
        <h1 style={{ margin: "5px" }}>Resources shared</h1>
        <p>Resources</p>
        <p>Resources</p>
        <p>Resources</p>
      </div>
    </div>
  );
}

export default Dashboard;
