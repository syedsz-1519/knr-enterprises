"use client";

import { BarChart3, Package, Truck, DollarSign } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 sticky top-16 z-10">
        <div className="container-app">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </div>

      <div className="container-app py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Package, label: "Total Products", value: "48", color: "blue" },
            { icon: DollarSign, label: "This Month Sales", value: "₹2.4L", color: "green" },
            { icon: Truck, label: "Active Orders", value: "12", color: "purple" },
            { icon: BarChart3, label: "Avg Response Time", value: "8 min", color: "orange" },
          ].map((stat, idx) => (
            <div key={idx} className="card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color === "blue" ? "bg-blue-100" : stat.color === "green" ? "bg-green-100" : stat.color === "purple" ? "bg-purple-100" : "bg-orange-100"}`}>
                  <stat.icon className={stat.color === "blue" ? "text-blue-600" : stat.color === "green" ? "text-green-600" : stat.color === "purple" ? "text-purple-600" : "text-orange-600"} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Order ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "ORD-001", customer: "Chevella Gram Panchayat", amount: "₹45,000", status: "Delivered" },
                  { id: "ORD-002", customer: "Moinabad Municipality", amount: "₹82,500", status: "In Transit" },
                  { id: "ORD-003", customer: "Rajendranagar Contractor", amount: "₹28,000", status: "Processing" },
                ].map((order) => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-blue-600">{order.id}</td>
                    <td className="py-3 px-4 text-gray-900">{order.customer}</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">{order.amount}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                        order.status === "In Transit" ? "bg-blue-100 text-blue-700" :
                        "bg-orange-100 text-orange-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
