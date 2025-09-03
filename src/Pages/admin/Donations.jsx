import React, { useEffect, useState } from "react";
import { baseUrl } from "../../utils/api";
import Table from "../../components/admin/Table";

const Donations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // fetch from backend
    fetch(`${baseUrl}/api/donations`)
      .then((res) => res.json())
      .then((data) => setDonations(data))
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    "FullName",
    "Email",
    "Phone",
    "Address",
    "Amount",
    "Service",
    "Message",
  ];

  return (
    <div className="contacts-page">
      <h2 className="contacts-title">Donations</h2>
      <div className="contacts-table-wrapper">
        <Table columns={columns} data={donations} />
      </div>
    </div>
  );
};

export default Donations;
