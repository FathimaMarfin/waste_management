import React, { useState } from 'react';

const WorkerDashboard = () => {
  // 1. Using State to make the table interactive
  const [collectionData, setCollectionData] = useState([
    { id: 1, house: 'HN-101', status: 'Pending', warden: 'Arun K.', mobile: '+91 98470 12345', address: 'Green Villa, Ward 4', type: 'Plastic', date: '28/02', payId: 'TXN01' },
    { id: 2, house: 'HN-202', status: 'Collected', warden: 'Sita Ram', mobile: '+91 94460 55667', address: 'Rose Garden, Sector A', type: 'Organic', date: '27/02', payId: 'TXN02' },
    { id: 3, house: 'HN-305', status: 'Collected', warden: 'Manoj V.', mobile: '+91 99950 11223', address: 'Flat 4B, Sky Towers', type: 'Electronic', date: '28/02', payId: 'TXN03' },
    { id: 4, house: 'HN-112', status: 'Collected', warden: 'Priya Das', mobile: '+91 98950 44332', address: 'Hill View, Lane 2', type: 'Paper', date: '26/02', payId: 'TXN04' },
    { id: 5, house: 'HN-404', status: 'Pending', warden: 'Rahul J.', mobile: '+91 97440 88990', address: 'Santi Niwas, Ward 12', type: 'Metal', date: '25/02', payId: 'TXN05' },
    { id: 6, house: 'HN-215', status: 'Collected', warden: 'Anjali M.', mobile: '+91 96330 22114', address: 'Lake Side, Block C', type: 'Plastic', date: '28/02', payId: 'TXN06' },
    { id: 7, house: 'HN-501', status: 'Pending', warden: 'Kevin Sam', mobile: '+91 95220 77889', address: 'Valley View, Plot 45', type: 'Organic', date: '24/02', payId: 'TXN07' },
  ]);

  // 2. Function to handle status change
  const handleStatusChange = (id, newStatus) => {
    const updatedData = collectionData.map((item) => 
      item.id === id ? { ...item, status: newStatus } : item
    );
    setCollectionData(updatedData);
  };

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
            placeholder="Search House..." 
            className="border border-gray-200 p-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#0a5d2c]"
          />
        </div>
      </div>

      {/* Database Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto border border-gray-100">
        <table className="w-full text-left min-w-[1100px]">
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
            {collectionData.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 hover:bg-green-50/50 transition-colors">
                <td className="p-4 font-bold text-gray-800">{row.house}</td>
                <td className="p-4">
                  {/* 3. The Interactive Dropdown */}
                  <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row.id, e.target.value)}
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
                <td className="p-4 text-gray-500 italic max-w-[200px] truncate" title={row.address}>
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


