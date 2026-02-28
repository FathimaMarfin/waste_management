import React, { useState, useEffect } from 'react';

const WorkerDashboard = () => {
  // 1. States for Data and Search
  const [collectionData, setCollectionData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // 2. Fetch Data from MongoDB on Mount
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('https://waste-management-05mh.onrender.com/api/collections');
        const data = await response.json();
        setCollectionData(data);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching collections:", err);
        setLoading(false);
      }
    };
    fetchCollections();
  }, []);

  // 3. Function to handle status change in Backend + UI
  const handleStatusChange = async (id, newStatus) => {
    try {
      // Update MongoDB
      await fetch(`https://waste-management-05mh.onrender.com/api/collections/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      // Update Local State
      const updatedData = collectionData.map((item) => 
        item._id === id ? { ...item, status: newStatus } : item
      );
      setCollectionData(updatedData);
    } catch (err) {
      console.error("❌ Failed to update status:", err);
    }
  };

  // 4. Filter logic for Search
  const filteredData = collectionData.filter((item) =>
    item.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.warden.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="mt-32 text-center font-bold text-[#0a5d2c]">Loading Database...</div>;

  return (
    <div className="mt-24 p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-[#0a5d2c]">Waste Collection Database</h1>
        <div className="flex gap-3">
          <select className="border border-gray-200 p-2 rounded-lg text-sm outline-none bg-gray-50">
            <option>All Localities</option>
            <option>Kerala</option>
          </select>
          <input 
            type="text" 
            placeholder="Search House or Warden..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-200 p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#0a5d2c]"
          />
        </div>
      </div>

      {/* Database Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto border border-gray-100">
        <table className="w-full text-left min-w-275">
          <thead className="bg-[#0a5d2c] text-white text-xs uppercase font-semibold">
            <tr>
              <th className="p-4">House No</th>
              <th className="p-4">Status</th>
              <th className="p-4">Warden Name</th>
              <th className="p-4">Mobile Number</th>
              <th className="p-4">Address</th>
              <th className="p-4">Waste Type</th>
              <th className="p-4">Date</th>
              <th className="p-4">Payment</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredData.map((row) => (
              <tr key={row._id} className="border-b border-gray-50 hover:bg-green-50/50 transition-colors">
                <td className="p-4 font-bold text-gray-800">{row.house}</td>
                <td className="p-4">
                  <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row._id, e.target.value)}
                    className={`px-3 py-1 rounded-md text-[10px] font-bold text-white shadow-sm outline-none cursor-pointer transition-all ${
                      row.status === 'Collected' ? 'bg-green-600' : 'bg-red-600'
                    }`}
                  >
                    <option value="Collected" className="bg-white text-gray-800">COLLECTED</option>
                    <option value="Pending" className="bg-white text-gray-800">PENDING</option>
                  </select>
                </td>
                <td className="p-4 text-gray-700 font-medium">{row.warden}</td>
                <td className="p-4 text-gray-600">{row.mobile}</td>
                <td className="p-4 text-gray-500 italic max-w-50 truncate" title={row.address}>
                  {row.address}
                </td>
                <td className="p-4 text-gray-600">{row.type}</td>
                <td className="p-4 text-gray-600">{row.date}</td>
                <td className="p-4">
                  <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-mono text-xs">
                    {row.payId}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-gray-400 hover:text-[#0a5d2c] mx-1">✏️</button>
                  <button className="text-gray-400 hover:text-blue-700 mx-1">📄</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkerDashboard;