import React, { useEffect, useState } from "react";
import Table from "../../components/admin/Table";
import { baseUrl } from "../../utils/api";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${baseUrl}/api/contact`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch contacts");
        }

        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error("Fetch contacts error:", err);
      }
    };

    fetchContacts();
  }, []);

  const columns = ["name", "email", "phone", "message"];

  return (
    <div className="contacts-page">
      <h2 className="contacts-title">Contacts</h2>
      <div className="contacts-table-wrapper">
        <Table columns={columns} data={contacts} />
      </div>
    </div>
  );
};

export default Contacts;
