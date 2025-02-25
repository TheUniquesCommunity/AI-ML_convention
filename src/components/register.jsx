import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="w-3/4 bg-white shadow-lg rounded-lg flex overflow-hidden">
        {/* Left Section with Icons & Text */}
        <div className="w-1/3 bg-gray-600 flex flex-col justify-center items-start p-20 text-white gap-y-9">
          <div className="flex items-center space-x-4">
            <FaUser size={20} />
            <div>
              <h3 className="font-bold">User Registration</h3>
              <p className="text-sm">Sign up to get started.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope size={20} />
            <div>
              <h3 className="font-bold">Email Access</h3>
              <p className="text-sm">Provide a valid email.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt size={20} />
            <div>
              <h3 className="font-bold">Contact Info</h3>
              <p className="text-sm">Enter your phone number.</p>
            </div>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-2/3 p-10 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Registeration Form</h2>

            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-gray-100" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-gray-100" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-gray-100" required />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Department</label>
              <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg bg-gray-100" required />
            </div>

            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-900">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;