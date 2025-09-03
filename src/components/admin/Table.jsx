import React from "react";
import "../../App.css";

const Table = ({ columns, data }) => {
  // helper to render cell content
  const renderCell = (value) => {
    if (!value) return "-";

    // if it's a URL
    if (typeof value === "string" && value.startsWith("http")) {
      if (value.includes("/raw/upload")) {
        return (
          <a
            href={value + "?fl_attachment"} // ✅ force download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </a>
        );
      }
      if (value.match(/\.(jpeg|jpg|png|webp|png)$/i)) {
        return (
          <a href={value} target="_blank" rel="noopener noreferrer">
            <img src={value} alt="file" width="80" />
          </a>
        );
      }
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      );
    }

    return value; // plain text
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i}>{typeof col === "string" ? col : col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, i) => (
              <tr key={i}>
                {columns.map((col, j) => {
                  const key = typeof col === "string" ? col : col.key;
                  return <td key={j}>{renderCell(row[key])}</td>;
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="no-data">
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// import React from "react";
// import "../../App.css";

// const Table = ({ columns, data }) => {
//   return (
//     <div className="table-container">
//       <table className="custom-table">
//         <thead>
//           <tr>
//             {columns.map((col, i) => (
//               <th key={i}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((row, i) => (
//               <tr key={i}>
//                 {columns.map((col, j) => (
//                   <td key={j}>{row[col]}</td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={columns.length} className="no-data">
//                 No Data
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
