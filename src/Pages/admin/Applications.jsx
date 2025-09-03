import React, { useEffect, useState } from "react";
import Table from "../../components/admin/Table";
import { baseUrl } from "../../utils/api";

const Applications = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${baseUrl}/api/applications`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch applications");
        }

        const data = await res.json();
        setApps(data);
      } catch (err) {
        console.error("Fetch apps error:", err);
      }
    };

    fetchApps();
  }, []);

  const columns = [
    { key: "fullName", label: "Full Name" },
    { key: "guardianName", label: "Guardian Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "address", label: "Address" },
    { key: "aadhaar", label: "Aadhaar" },
    { key: "certificate", label: "Certificate" },
    { key: "chooseCause", label: "Problem Description" }, // 👈 custom label
  ];

  return (
    <div className="contacts-page">
      <h2 className="contacts-title">Applications</h2>

      <div className="contacts-table-wrapper">
        <Table columns={columns} data={apps} />
      </div>
    </div>
  );
};

export default Applications;
