const DataModel = require("../models/DataModel");
const nodemailer = require("nodemailer");

exports.addData = async (req, res) => {
  try {
    const newData = await DataModel.create(req.body);
    res.status(201).json(newData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const allData = await DataModel.find();
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await DataModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    await DataModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.sendEmail = async (req, res) => {
  const selectedData = req.body.selectedData;

  let transporter = nodemailer.createTransport({
    host: "smtp.example.com", // SMTP host
    port: 587, // SMTP port
    secure: false, // false for TLS - as a boolean not string - if not using secure transport
    auth: {
      user: "your-email@example.com", // SMTP username
      pass: "your-password", // SMTP password
    },
  });

  let mailOptions = {
    from: "your-email@example.com",
    to: "info@redpositive.in", // Change this to your recipient email
    subject: "Selected Data from CRUDS Application",
    text: `Selected Data: ${JSON.stringify(selectedData)}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error sending email" });
  }
};
