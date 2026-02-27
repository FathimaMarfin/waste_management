import { useMemo } from "react";

export default function Home() {
  const currentMonth = useMemo(() => {
    return new Date().toLocaleString("default", { month: "long" });
  }, []);

  const expectedDate = `28 ${currentMonth} 2026`;

  const wasteTypes = [
    "Plastic",
    "Bottles",
    "Rubber Chappals",
    "Cardboard",
  ];

  const stats = [
    { title: "Pickups Completed", value: "3" },
    { title: "Pending Pickups", value: "1" },
    { title: "Reward Points", value: "120" },
    { title: "Green Rank", value: "A+" },
  ];

  const history = [
    { month: "January", status: "Collected", date: "29 Jan 2026" },
    { month: "December", status: "Collected", date: "30 Dec 2025" },
    { month: "November", status: "Missed", date: "-" },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 px-6">

      {/* 🔷 Hero */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900">
          ♻️ Waste Collection Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Track your monthly waste pickups and stay eco-friendly.
        </p>
      </div>

      {/* 🔷 Current Month */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-[0_8px_30px_rgba(0,100,0,0.25)]">
        <h2 className="text-xl font-semibold text-green-900 mb-6">
          📅 {currentMonth} Collection Overview
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="bg-gray-50 p-5 rounded-xl shadow-[0_6px_20px_rgba(0,100,0,0.2)]">
            <p className="text-gray-500 mb-2">Waste to be Collected</p>
            <ul className="space-y-1">
              {wasteTypes.map((waste, i) => (
                <li key={i} className="text-green-900 font-semibold">
                  • {waste}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl shadow-[0_6px_20px_rgba(0,100,0,0.2)]">
            <p className="text-gray-500">Expected Collection Date</p>
            <p className="text-lg font-bold text-green-900 mt-2">
              {expectedDate}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl shadow-[0_6px_20px_rgba(0,100,0,0.2)]">
            <p className="text-gray-500">Status</p>
            <span className="inline-block mt-2 px-4 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </div>

        </div>
      </div>

      {/* 🔷 Stats */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-[0_8px_25px_rgba(0,100,0,0.25)] hover:shadow-[0_10px_35px_rgba(0,100,0,0.35)] transition"
          >
            <p className="text-gray-500">{item.title}</p>
            <p className="text-2xl font-bold text-green-900 mt-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* 🔷 History */}
      <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,100,0,0.25)]">
        <h2 className="text-xl font-semibold text-green-900 mb-4">
          🕘 Collection History
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500">
                <th className="py-3">Month</th>
                <th className="py-3">Status</th>
                <th className="py-3">Collection Date</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 font-medium">{item.month}</td>

                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === "Collected"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="py-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}