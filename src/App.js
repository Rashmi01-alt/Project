import "./App.css";

import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form"; // Import Form component
import Table from "../components/Table"; // Import Table component
import Modal from "../components/Modal"; // Import Modal component

function App  ()  {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendEmail = async () => {
    try {
      await axios.post("/api/send-email", { selectedData: selectedRows });
      alert("Email sent successfully");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>CRUDS Application</h1>
      <Form fetchData={fetchData} /> {/* Render Form component */}
      <Table data={data} setSelectedRows={setSelectedRows} />{" "}
      {/* Render Table component */}
      <Modal handleSendEmail={handleSendEmail} /> {/* Render Modal component */}
    </div>
  );
};

export default App;
