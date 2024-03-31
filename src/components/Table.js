import React from "react";

const Table = ({ data, setSelectedRows }) => {
  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, id]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowId) => rowId !== id)
      );
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hobbies</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, item._id)}
              />
            </td>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
            <td>{item.hobbies}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
