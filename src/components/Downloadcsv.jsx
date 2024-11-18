import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";

const DataExportPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts"); // Example API
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Export as PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    const title = "Exported Data";
    doc.setFontSize(18);
    doc.text(title, 10, 10);

    const pageWidth = doc.internal.pageSize.width;
    const margin = 10;
    const cellWidth = (pageWidth - 2 * margin) / 2; // Adjust for two columns

    data.forEach((item, index) => {
      const y = 20 + index * 10; // Adjust line height
      if (y > doc.internal.pageSize.height - 10) {
        doc.addPage();
      }
      doc.text(`ID: ${item.id}`, margin, y);
      doc.text(`Title: ${item.title}`, margin + cellWidth, y);
    });

    doc.save("data.pdf");
  };

  // CSV headers
  const csvHeaders = [
    { label: "ID", key: "id" },
    { label: "Title", key: "title" },
    { label: "Body", key: "body" },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Data Export Example</h1>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={exportPDF}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Export as PDF
        </button>
        <CSVLink
          data={data}
          headers={csvHeaders}
          filename={"data.csv"}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Export as CSV
        </CSVLink>
      </div>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataExportPage;
