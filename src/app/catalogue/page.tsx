"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bleaching Powder Grade 1",
    category: "Disinfectants",
    price: "₹450",
    moq: "25kg bags",
    desc: "ISI certified, 33%+ chlorine potency",
    image: "🧴",
  },
  {
    id: 2,
    name: "Hydrated Slaked Lime",
    category: "Disinfectants",
    price: "₹280",
    moq: "50kg bags",
    desc: "Drain sanitization, moisture-proof",
    image: "🪣",
  },
  {
    id: 3,
    name: "Malathion 5% DP",
    category: "Vector Control",
    price: "₹1200",
    moq: "10kg",
    desc: "CIB approved mosquito control",
    image: "🧪",
  },
  {
    id: 4,
    name: "Thermal Pulse-Jet Fogger",
    category: "Vector Control",
    price: "₹18500",
    moq: "1 unit",
    desc: "High-output vector eradication",
    image: "💨",
  },
  {
    id: 5,
    name: "LED Street Light 60W",
    category: "Infrastructure",
    price: "₹2800",
    moq: "1 unit",
    desc: "IP66 waterproof, 10kV surge protection",
    image: "💡",
  },
  {
    id: 6,
    name: "HDPE Dustbin 240L",
    category: "Waste Management",
    price: "₹3200",
    moq: "1 unit",
    desc: "Twin wet/dry, UV stabilized",
    image: "🗑️",
  },
];

const categories = ["All", "Disinfectants", "Vector Control", "Infrastructure", "Waste Management"];

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container-app">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Products Catalogue</h1>
          <p className="text-gray-600">GST-compliant bulk supplies for institutional procurement</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="container-app py-6">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-10 w-full"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-app pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{product.image}</div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                {product.category}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.desc}</p>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">MOQ:</span>
                  <span className="font-semibold text-gray-900">{product.moq}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bulk Price:</span>
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                </div>
              </div>

              <a href="https://wa.me/918886175855" target="_blank" className="btn-primary w-full text-center">
                Request Quote
              </a>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No products found</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
