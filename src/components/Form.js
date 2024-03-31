import React from "react";

const Form = ({ fetchData }) => {
  const [formData, setFormData] = useState({});

     const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/data', formData);
      fetchData();
      setFormData({});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
              placeholder="Name"
              onChange={handleChange} required
        className="border border-gray-400 p-2 mr-2"
      />
      <input
        type="text"
              placeholder="Phone Number"
              onChange={handleChange} required
        className="border border-gray-400 p-2 mr-2"
      />
      <input
        type="email"
              placeholder="Email"
              onChange={handleChange} required
        className="border border-gray-400 p-2 mr-2"
      />
      <input
        type="text"
              placeholder="Hobbies"
              onChange={handleChange} required
        className="border border-gray-400 p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Save
      </button>
    </form>
  );
};

export default Form;
