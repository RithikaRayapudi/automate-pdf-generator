import React, { useState } from 'react';
import Navbar from './Navbar';

function Settings() {
  const [fileName, setFileName] = useState('');
  const [pageSize, setPageSize] = useState('A4');
  const [orientation, setOrientation] = useState('portrait');
  const [margin, setMargin] = useState(10); // Default margin in mm

  const handleFileNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
  };

  const handleMarginChange = (e) => {
    setMargin(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save settings functionality
    console.log('Settings saved:', { fileName, pageSize, orientation, margin });
    alert('Settings saved successfully!');
  };

  return (
    <div>
   <Navbar/> 
    <div className="container mx-auto p-4 mt-20">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image Section (Replace with your own image) */}
          <div className="md:w-1/3 p-4 bg-gray-100 flex items-center justify-center">
            <img src="https://tse2.mm.bing.net/th?id=OIP.hhkbCjcKh4jNEdijGb1qaAHaHa&pid=Api&P=0&h=180" alt="PDF Icon" className="w-36 h-36 mx-auto mb-4" />
          </div>

          {/* Settings Section */}
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-8">PDF Generator Settings</h1>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Default File Name:</label>
                <input
                  type="text"
                  value={fileName}
                  onChange={handleFileNameChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter default file name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Page Size:</label>
                <select
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="A4">A4</option>
                  <option value="Letter">Letter</option>
                  <option value="Legal">Legal</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Orientation:</label>
                <select
                  value={orientation}
                  onChange={handleOrientationChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Margin (mm):</label>
                <input
                  type="number"
                  value={margin}
                  onChange={handleMarginChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  min="0"
                  max="50"
                  step="1"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Settings
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Settings;
