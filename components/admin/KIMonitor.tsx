"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function KIMonitor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/ki-logs") // neue API-Route
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">🧠 Meistgestellte KI-Fragen</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="input" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#a855f7" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
