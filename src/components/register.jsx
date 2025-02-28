import React, { useState } from 'react';
import { User, Mail, Phone, Upload } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    yourName: '',
    teamName: '',
    members: '',
    email: '',
    phone: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files ? e.target.files[0] : null
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 pt-16">
      <div className="w-full max-w-5xl flex rounded-lg overflow-hidden shadow-xl">
        {/* Left side content */}
        <div className="bg-[#a01c1c] text-white p-8 w-2/5 flex items-center">
          <div className="space-y-8 mx-auto">
            <div className="flex items-start space-x-4">
              <User className="mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold">User Registration</h3>
                <p>Sign up to get started.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold">Email Access</h3>
                <p>Provide a valid email.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold">Contact Info</h3>
                <p>Enter your phone number.</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Why Register?</h2>
              <ul className="space-y-2">
                <li>• Access exclusive team resources and materials</li>
                <li>• Receive important updates about events and deadlines</li>
                <li>• Connect with other participants and organizers</li>
                <li>• Track your team's progress throughout the competition</li>
                <li>• Qualify for certificates and recognition</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right side form */}
        <div className="bg-white p-8 w-3/5 flex items-center">
          <div className="w-full">
            <div className="mb-6 text-center">
            </div>
            
            <h1 className="text-center text-2xl font-bold text-[#a01c1c] mb-6">Registration Form</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="yourName" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded border-0"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="teamName" className="block text-gray-700 mb-2">Team Name</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded border-0"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="members" className="block text-gray-700 mb-2">Number of Team Members</label>
                  <input
                    type="number"
                    id="members"
                    name="members"
                    value={formData.members}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded border-0"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded border-0"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-100 rounded border-0"
                    required
                  />
                </div>
                
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-[#a01c1c] text-white py-2 px-8 rounded hover:bg-[#8a1818] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;