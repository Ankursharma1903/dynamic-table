"use client";

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const headers = Object.keys(data[0] || {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               {headers.map((header, index) => (
//                 <th key={index} className="border border-gray-500 px-4 py-2">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index}>
//                 {Object.values(row).map((value, index) => (
//                   <td key={index} className="border border-gray-500 px-4 py-2">
//                     {value}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 2

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       SUM_revenue,
//       SUM_weight,
//       zone,
//       region,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       SUM_revenue,
//       SUM_weight,
//       zone,
//       region,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Customer Category
//               </th>
//               <th className="border border-gray-500 px-4 py-2">
//                 Product Group ID
//               </th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(groupedData).map((category, index) => (
//               <React.Fragment key={index}>
//                 {Object.keys(groupedData[category]).map((groupID, idx) => (
//                   <React.Fragment key={idx}>
//                     <tr>
//                       {idx === 0 && (
//                         <td
//                           rowSpan={Object.keys(groupedData[category]).length}
//                           className="border border-gray-500 px-4 py-2"
//                         >
//                           {category}
//                         </td>
//                       )}
//                       <td>{groupID}</td>
//                       <td>{groupedData[category][groupID][0].zone}</td>
//                       <td>{groupedData[category][groupID][0].region}</td>
//                       <td>{groupedData[category][groupID][0].SUM_revenue}</td>
//                       <td>{groupedData[category][groupID][0].SUM_weight}</td>
//                     </tr>
//                     {groupedData[category][groupID].slice(1).map((data, i) => (
//                       <tr key={i}>
//                         <td colSpan={idx === 0 ? "2" : "1"}></td>
//                         <td>{data.zone}</td>
//                         <td>{data.region}</td>
//                         <td>{data.SUM_revenue}</td>
//                         <td>{data.SUM_weight}</td>
//                       </tr>
//                     ))}
//                   </React.Fragment>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

//test 3

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       SUM_revenue,
//       SUM_weight,
//       zone,
//       region,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       SUM_revenue,
//       SUM_weight,
//       zone,
//       region,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Customer Category / Product Group ID
//               </th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(groupedData).map((category, index) => (
//               <React.Fragment key={index}>
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="border border-gray-500 px-4 py-2 text-center"
//                   >
//                     {category}
//                   </td>
//                 </tr>
//                 {Object.keys(groupedData[category]).map((groupID, idx) => (
//                   <React.Fragment key={idx}>
//                     <tr>
//                       <td>{groupID}</td>
//                       <td>{groupedData[category][groupID][0].zone}</td>
//                       <td>{groupedData[category][groupID][0].region}</td>
//                       <td>{groupedData[category][groupID][0].SUM_revenue}</td>
//                       <td>{groupedData[category][groupID][0].SUM_weight}</td>
//                     </tr>
//                     {groupedData[category][groupID].slice(1).map((data, i) => (
//                       <tr key={i}>
//                         <td></td>
//                         <td>{data.zone}</td>
//                         <td>{data.region}</td>
//                         <td>{data.SUM_revenue}</td>
//                         <td>{data.SUM_weight}</td>
//                       </tr>
//                     ))}
//                   </React.Fragment>
//                 ))}
//                 {index !== Object.keys(groupedData).length - 1 && (
//                   <tr>
//                     <td colSpan="6" className="border border-gray-500"></td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 4
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Customer Category / Product Group ID
//               </th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(
//               ([category, productGroups], index) => (
//                 <React.Fragment key={index}>
//                   <tr>
//                     <td
//                       colSpan="5"
//                       className="border border-gray-500 px-4 py-2 text-center"
//                     >
//                       {category}
//                     </td>
//                   </tr>
//                   {Object.entries(productGroups).map(
//                     ([groupID, details], idx) => (
//                       <React.Fragment key={idx}>
//                         <tr>
//                           <td colSpan="2">{groupID}</td>
//                           <td></td>
//                           <td></td>
//                           <td></td>
//                         </tr>
//                         {details.map((data, i) => (
//                           <tr key={i}>
//                             <td></td>
//                             <td>{data.zone}</td>
//                             <td>{data.region}</td>
//                             <td>{data.SUM_revenue}</td>
//                             <td>{data.SUM_weight}</td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     )
//                   )}
//                   {index !== Object.keys(groupedData).length - 1 && (
//                     <tr>
//                       <td colSpan="6" className="border border-gray-500"></td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 5
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category and then by Product Group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Customer Category / Product Group ID
//               </th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(
//               ([category, productGroups], index) => (
//                 <React.Fragment key={index}>
//                   <tr>
//                     <td
//                       colSpan="5"
//                       className="border border-gray-500 px-4 py-2 text-center"
//                     >
//                       {category}
//                     </td>
//                   </tr>
//                   {Object.entries(productGroups).map(
//                     ([groupID, details], idx) => (
//                       <React.Fragment key={idx}>
//                         <tr>
//                           <td colSpan="2">{groupID}</td>
//                           <td></td>
//                           <td></td>
//                           <td></td>
//                         </tr>
//                         {details.map((data, i) => (
//                           <tr key={i}>
//                             <td></td>
//                             <td>{data.zone}</td>
//                             <td>{data.region}</td>
//                             <td>{data.SUM_revenue}</td>
//                             <td>{data.SUM_weight}</td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     )
//                   )}
//                   {index !== Object.keys(groupedData).length - 1 && (
//                     <tr>
//                       <td colSpan="6" className="border border-gray-500"></td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 6   best success
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category and then by Product Group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Category / Group ID
//               </th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(
//               ([category, productGroups], index) => (
//                 <React.Fragment key={index}>
//                   <tr>
//                     <td
//                       colSpan="5"
//                       className="border border-gray-500 px-4 py-2 text-center bg-gray-200"
//                     >
//                       {category}
//                     </td>
//                   </tr>
//                   {Object.entries(productGroups).map(
//                     ([groupID, details], idx) => (
//                       <React.Fragment key={idx}>
//                         <tr>
//                           <td colSpan="2" className="bg-gray-100">
//                             {groupID}
//                           </td>
//                           <td className="bg-gray-100"></td>
//                           <td className="bg-gray-100"></td>
//                           <td className="bg-gray-100"></td>
//                         </tr>
//                         {details.map((data, i) => (
//                           <tr key={i}>
//                             <td className="bg-gray-100"></td>
//                             <td>{data.zone}</td>
//                             <td>{data.region}</td>
//                             <td>{data.SUM_revenue}</td>
//                             <td>{data.SUM_weight}</td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     )
//                   )}
//                 </React.Fragment>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 7 changed 6
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category and then by Product Group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">Category</th>
//               <th className="border border-gray-500 px-4 py-2">Group ID</th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(
//               ([category, productGroups], index) => (
//                 <React.Fragment key={index}>
//                   {Object.entries(productGroups).map(
//                     ([groupID, details], idx) => (
//                       <React.Fragment key={idx}>
//                         <tr>
//                           <td
//                             rowSpan={details.length}
//                             className="border border-gray-500 px-4 py-2"
//                           >
//                             {category}
//                           </td>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {groupID}
//                           </td>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {details[0].zone}
//                           </td>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {details[0].region}
//                           </td>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {details[0].SUM_revenue}
//                           </td>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {details[0].SUM_weight}
//                           </td>
//                         </tr>
//                         {details.slice(1).map((data, i) => (
//                           <tr key={i}>
//                             <td className="border border-gray-500 px-4 py-2"></td>
//                             <td className="border border-gray-500 px-4 py-2"></td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.zone}
//                             </td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.region}
//                             </td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.SUM_revenue}
//                             </td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.SUM_weight}
//                             </td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     )
//                   )}
//                 </React.Fragment>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 8 best successive all data like cp then ep then all data
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category and then by Product Group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">Category</th>
//               <th className="border border-gray-500 px-4 py-2">Group ID</th>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               <th className="border border-gray-500 px-4 py-2">Revenue</th>
//               <th className="border border-gray-500 px-4 py-2">Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(
//               ([category, productGroups], index) => (
//                 <React.Fragment key={index}>
//                   {Object.entries(productGroups).map(
//                     ([groupID, details], idx) => (
//                       <React.Fragment key={idx}>
//                         {details.map((data, i) => (
//                           <tr key={i}>
//                             {i === 0 && (
//                               <React.Fragment>
//                                 <td
//                                   rowSpan={details.length}
//                                   className="border border-gray-500 px-4 py-2"
//                                 >
//                                   {category}
//                                 </td>
//                                 <td
//                                   rowSpan={details.length}
//                                   className="border border-gray-500 px-4 py-2"
//                                 >
//                                   {groupID}
//                                 </td>
//                               </React.Fragment>
//                             )}
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.zone}
//                             </td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.region}
//                             </td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.SUM_revenue}
//                             </td>
//                             <td className="border border-gray-500 px-4 py-2">
//                               {data.SUM_weight}
//                             </td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     )
//                   )}
//                 </React.Fragment>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 9
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category and then by Product Group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         {Object.keys(groupedData).length === 0 ? (
//           <p>No data to display.</p>
//         ) : (
//           Object.entries(groupedData).map(
//             ([category, productGroups], index) => (
//               <div key={index}>
//                 <h3>{category}</h3>
//                 <table className="border-collapse border border-gray-500 w-full">
//                   <thead>
//                     <tr>
//                       <th className="border border-gray-500 px-4 py-2">
//                         Group ID
//                       </th>
//                       <th className="border border-gray-500 px-4 py-2">Zone</th>
//                       <th className="border border-gray-500 px-4 py-2">
//                         Region
//                       </th>
//                       <th className="border border-gray-500 px-4 py-2">
//                         Revenue
//                       </th>
//                       <th className="border border-gray-500 px-4 py-2">
//                         Weight
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Object.entries(productGroups).map(
//                       ([groupID, details], idx) => (
//                         <React.Fragment key={idx}>
//                           {details.map((data, i) => (
//                             <tr key={i}>
//                               {i === 0 && (
//                                 <React.Fragment>
//                                   <td
//                                     rowSpan={details.length}
//                                     className="border border-gray-500 px-4 py-2"
//                                   >
//                                     {groupID}
//                                   </td>
//                                 </React.Fragment>
//                               )}
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.zone}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.region}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.SUM_revenue}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.SUM_weight}
//                               </td>
//                             </tr>
//                           ))}
//                         </React.Fragment>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 10

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category and then by Product Group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const {
//       customer_category,
//       Product_Group_ID,
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push({
//       zone,
//       region,
//       SUM_revenue,
//       SUM_weight,
//     });
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Table</h2>
//         {Object.keys(groupedData).length === 0 ? (
//           <p>No data to display.</p>
//         ) : (
//           Object.entries(groupedData).map(
//             ([category, productGroups], index) => (
//               <div key={index}>
//                 <h3>{category}</h3>
//                 {Object.entries(productGroups).map(
//                   ([groupID, details], idx) => (
//                     <div key={idx}>
//                       <h4>Product Group ID: {groupID}</h4>
//                       <table className="border-collapse border border-gray-500 w-full">
//                         <thead>
//                           <tr>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Zone
//                             </th>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Region
//                             </th>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Revenue
//                             </th>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Weight
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {details.map((data, i) => (
//                             <tr key={i}>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.zone}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.region}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.SUM_revenue}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.SUM_weight}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   )
//                 )}
//               </div>
//             )
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 11 success

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Transpose data to create pivot-like structure
//   const transposedData = data.reduce((acc, curr) => {
//     const { customer_category, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push(rest);
//     return acc;
//   }, {});

//   const categories = Object.keys(transposedData);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               {categories.map((category, index) => (
//                 <th key={index} className="border border-gray-500 px-4 py-2">
//                   {category}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, index) => (
//               <tr key={index}>
//                 {Object.keys(transposedData[category]).map((groupID, idx) => (
//                   <td key={idx} className="border border-gray-500 px-4 py-2">
//                     <div>
//                       <h4>{groupID}</h4>
//                       <table className="border-collapse border border-gray-500 w-full">
//                         <thead>
//                           <tr>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Zone
//                             </th>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Region
//                             </th>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Revenue
//                             </th>
//                             <th className="border border-gray-500 px-4 py-2">
//                               Weight
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {transposedData[category][groupID].map((data, i) => (
//                             <tr key={i}>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.zone}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.region}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.SUM_revenue}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.SUM_weight}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 12
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push(rest);
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer Category</th>
//               <th>Product Group IDs</th>
//               <th>Zone</th>
//               <th>Region</th>
//               <th>Revenue</th>
//               <th>Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, index) => (
//               <React.Fragment key={index}>
//                 {Object.keys(groupedData[category]).map((groupID, idx) => (
//                   <tr key={`${category}-${groupID}`}>
//                     {idx === 0 && (
//                       <td rowSpan={Object.keys(groupedData[category]).length}>
//                         {category}
//                       </td>
//                     )}
//                     <td>{groupID}</td>
//                     {groupedData[category][groupID].map((data, i) => (
//                       <React.Fragment key={i}>
//                         <td>{data.zone}</td>
//                         <td>{data.region}</td>
//                         <td>{data.SUM_revenue}</td>
//                         <td>{data.SUM_weight}</td>
//                       </React.Fragment>
//                     ))}
//                   </tr>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 13 by me
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push(rest);
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer Category</th>
//               <th colSpan="5">Product Group IDs</th>
//             </tr>
//             <tr>
//               <th></th>
//               {categories.map((category, index) => (
//                 <th key={index}>{category}</th>
//               ))}
//             </tr>
//             <tr>
//               <th></th>
//               {Object.keys(groupedData[categories[0]]).map((groupID, idx) => (
//                 <th key={idx}>{groupID}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, index) => (
//               <tr key={index}>
//                 {Object.keys(groupedData[category]).map((groupID, idx) => (
//                   <React.Fragment key={`${category}-${groupID}`}>
//                     {groupedData[category][groupID].map((data, i) => (
//                       <React.Fragment key={i}>
//                         <td>{data.zone}</td>
//                         <td>{data.region}</td>
//                         <td>{data.SUM_revenue}</td>
//                         <td>{data.SUM_weight}</td>
//                       </React.Fragment>
//                     ))}
//                   </React.Fragment>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 14
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push(rest);
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);
//   const productGroupIDs = Object.keys(groupedData[categories[0]]);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer category</th>
//               {categories.map((category, index) => (
//                 <th key={index} colSpan={productGroupIDs.length}>
//                   {category}
//                 </th>
//               ))}
//             </tr>
//             <tr>
//               {productGroupIDs.map((groupID, idx) => (
//                 <th key={idx}>{groupID}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, index) => (
//               <React.Fragment key={index}>
//                 {productGroupIDs.map((groupID, idx) => (
//                   <tr key={`${category}-${groupID}`}>
//                     <td>{groupedData[category][groupID] ? groupID : ""}</td>
//                     {groupedData[category][groupID] ? (
//                       groupedData[category][groupID].map((data, i) => (
//                         <React.Fragment key={i}>
//                           <td>
//                             {data.zone}, {data.region}, {data.SUM_revenue},{" "}
//                             {data.SUM_weight}
//                           </td>
//                         </React.Fragment>
//                       ))
//                     ) : (
//                       <td>No data</td>
//                     )}
//                   </tr>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// tyest 15
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by customer category
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][Product_Group_ID]) {
//       acc[customer_category][Product_Group_ID] = [];
//     }
//     acc[customer_category][Product_Group_ID].push(rest);
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer Category</th>
//               <th>Product Group IDs</th>
//               <th>Zone</th>
//               <th>Region</th>
//               <th>Revenue</th>
//               <th>Weight</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category, index) => (
//               <React.Fragment key={index}>
//                 {Object.keys(groupedData[category]).map((groupID, idx) => (
//                   <React.Fragment key={`${category}-${groupID}`}>
//                     <tr>
//                       {idx === 0 && (
//                         <td rowSpan={Object.keys(groupedData[category]).length}>
//                           {category}
//                         </td>
//                       )}
//                       <td>{groupID}</td>
//                       {groupedData[category][groupID].map((data, i) => (
//                         <React.Fragment key={i}>
//                           <td>{data.zone}</td>
//                           <td>{data.region}</td>
//                           <td>{data.SUM_revenue}</td>
//                           <td>{data.SUM_weight}</td>
//                         </React.Fragment>
//                       ))}
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

//test 16 region and zones corrected for common
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by zone, region, and product group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID, ...rest } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = {};
//     }
//     if (!acc[zone][region][Product_Group_ID]) {
//       acc[zone][region][Product_Group_ID] = rest;
//     }
//     return acc;
//   }, {});

//   const zones = Object.keys(groupedData);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer category</th>
//               {categories.map((category, index) => (
//                 <th key={index} colSpan={productGroupIDs.length}>
//                   {category}
//                 </th>
//               ))}
//             </tr>
//             <tr>
//               {productGroupIDs.map((groupID, idx) => (
//                 <th key={idx}>{groupID}</th>
//               ))}
//             </tr>
//           </thead>
//           <thead>
//             <tr>
//               <th rowSpan="3">Zone</th>
//               <th rowSpan="3">Region</th>
//               <th colSpan={Object.keys(data[0]).length - 2}>
//                 Product Group ID
//               </th>
//             </tr>

//             <tr>
//               {Object.keys(data[0])
//                 .filter((key) => key !== "zone" && key !== "region")
//                 .map((key) => (
//                   <th key={key}>Revenue Weight</th>
//                 ))}
//             </tr>
//           </thead>
//           <tbody>
//             {zones.map((zone) =>
//               Object.entries(groupedData[zone]).map(
//                 ([region, productGroupData]) => (
//                   <tr key={`${zone}-${region}`}>
//                     <td>{zone}</td>
//                     <td>{region}</td>
//                     {Object.values(productGroupData).map((data, index) => (
//                       <React.Fragment key={index}>
//                         <td>
//                           {data.revenue} {data.weight}
//                         </td>
//                       </React.Fragment>
//                     ))}
//                   </tr>
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

//test 17 on the way to achieve desired format
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by zone, region, and product group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, zone, region, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][zone]) {
//       acc[customer_category][zone] = {};
//     }
//     if (!acc[customer_category][zone][region]) {
//       acc[customer_category][zone][region] = {};
//     }
//     if (!acc[customer_category][zone][region][Product_Group_ID]) {
//       acc[customer_category][zone][region][Product_Group_ID] = rest;
//     }
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer category</th>
//               {categories.map((category, index) => (
//                 <th key={index} colSpan={Object.keys(data[0]).length - 3}>
//                   {category}
//                 </th>
//               ))}
//             </tr>
//             <tr>
//               <th>Zone</th>
//               <th>Region</th>
//               {Object.keys(data[0])
//                 .filter(
//                   (key) =>
//                     key !== "zone" &&
//                     key !== "region" &&
//                     key !== "Product_Group_ID"
//                 )
//                 .map((key, idx) => (
//                   <th key={idx}>{key}</th>
//                 ))}
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category) =>
//               Object.entries(groupedData[category]).map(([zone, regions]) =>
//                 Object.entries(regions).map(([region, productGroups]) =>
//                   Object.entries(productGroups).map(
//                     ([productGroupID, values]) => (
//                       <tr
//                         key={`${category}-${zone}-${region}-${productGroupID}`}
//                       >
//                         <td>{zone}</td>
//                         <td>{region}</td>
//                         {Object.values(values).map((value, idx) => (
//                           <td key={idx}>{value}</td>
//                         ))}
//                       </tr>
//                     )
//                   )
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 18
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by zone, region, and product group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, zone, region, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][zone]) {
//       acc[customer_category][zone] = {};
//     }
//     if (!acc[customer_category][zone][region]) {
//       acc[customer_category][zone][region] = {};
//     }
//     if (!acc[customer_category][zone][region][Product_Group_ID]) {
//       acc[customer_category][zone][region][Product_Group_ID] = rest;
//     }
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);

//   // Extract unique product group IDs
//   const productGroupIDs = [
//     ...new Set(data.map((item) => item.Product_Group_ID)),
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer category</th>
//               {categories.map((category, index) => (
//                 <th key={index} colSpan={productGroupIDs.length}>
//                   {category}
//                 </th>
//               ))}
//             </tr>
//             <tr>
//               <th>Zone</th>
//               <th>Region</th>
//               {productGroupIDs.map((groupID, idx) => (
//                 <th key={idx}>{groupID}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category) =>
//               Object.entries(groupedData[category]).map(([zone, regions]) =>
//                 Object.entries(regions).map(([region, productGroups]) =>
//                   Object.entries(productGroups).map(
//                     ([productGroupID, values]) => (
//                       <tr
//                         key={`${category}-${zone}-${region}-${productGroupID}`}
//                       >
//                         <td>{zone}</td>
//                         <td>{region}</td>
//                         {productGroupIDs.map((groupID, idx) => (
//                           <td key={idx}>{values[groupID]}</td>
//                         ))}
//                       </tr>
//                     )
//                   )
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 19
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   // Group data by zone, region, and product group ID
//   const groupedData = data.reduce((acc, curr) => {
//     const { customer_category, zone, region, Product_Group_ID, ...rest } = curr;
//     if (!acc[customer_category]) {
//       acc[customer_category] = {};
//     }
//     if (!acc[customer_category][zone]) {
//       acc[customer_category][zone] = {};
//     }
//     if (!acc[customer_category][zone][region]) {
//       acc[customer_category][zone][region] = {};
//     }
//     if (!acc[customer_category][zone][region][Product_Group_ID]) {
//       acc[customer_category][zone][region][Product_Group_ID] = rest;
//     }
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedData);

//   // Extract unique product group IDs
//   const productGroupIDs = [
//     ...new Set(data.map((item) => item.Product_Group_ID)),
//   ];

//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer category</th>
//               {productGroupIDs.map((groupID, idx) => (
//                 <th key={idx}>{groupID}</th>
//               ))}
//             </tr>
//             <tr>
//               <th>Zone</th>
//               <th>Region</th>
//               {productGroupIDs.map((groupID, idx) => (
//                 <th key={idx}>{groupID}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category) =>
//               Object.entries(groupedData[category]).map(([zone, regions]) => (
//                 <React.Fragment key={`${category}-${zone}`}>
//                   {Object.entries(regions).map(
//                     ([region, productGroups], regionIndex) => (
//                       <tr key={`${category}-${zone}-${region}`}>
//                         {regionIndex === 0 && (
//                           <td rowSpan={Object.keys(regions).length}>
//                             {category}
//                           </td>
//                         )}
//                         <td>{zone}</td>
//                         <td>{region}</td>
//                         {productGroupIDs.map((groupID, idx) => (
//                           <td key={`${category}-${zone}-${region}-${groupID}`}>
//                             {productGroups[groupID]
//                               ? `${productGroups[groupID].revenue} ${productGroups[groupID].weight}`
//                               : "-"}
//                           </td>
//                         ))}
//                       </tr>
//                     )
//                   )}
//                 </React.Fragment>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 20
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone
//   const groupedZones = data.reduce((acc, curr) => {
//     const { zone, region } = curr;
//     if (!acc[zone]) {
//       acc[zone] = [];
//     }
//     if (!acc[zone].includes(region)) {
//       acc[zone].push(region);
//     }
//     return acc;
//   }, {});

//   // Render the table
//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th>Customer Category</th>
//               {categories.map((category, index) => (
//                 <th key={index}>{category}</th>
//               ))}
//             </tr>
//             <tr>
//               <th>Product Group IDs</th>
//               {categories.map((category, index) => (
//                 <td key={index}>
//                   {productGroupIDsByCategory[category].join(", ")}
//                 </td>
//               ))}
//             </tr>
//             <tr>
//               <th>Zone</th>
//               {Object.keys(groupedZones).map((zone, index) => (
//                 <th key={index}>{zone}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedZones).map(([zone, regions]) => (
//               <tr key={zone}>
//                 <td colSpan={categories.length + 1}>{zone}</td>
//                 {categories.map((category, index) => (
//                   <React.Fragment key={`${zone}-${category}`}>
//                     {regions.map((region, idx) => (
//                       <td key={`${zone}-${category}-${idx}`}>{region}</td>
//                     ))}
//                   </React.Fragment>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 21
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEyOTk4MDY1LCJleHAiOjE3MTMwOTgwNjV9.Q7Ur6ZNbVYi3JydjF_X9bU-LKOHrY7MGUg0XTikdp98",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone and region
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = [];
//     }
//     if (!acc[zone][region].includes(Product_Group_ID)) {
//       acc[zone][region].push(Product_Group_ID);
//     }
//     return acc;
//   }, {});

//   // Render the table
//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Customer Category
//               </th>
//               {categories.map((category, index) => (
//                 <th className="border border-gray-500 px-4 py-2" key={index}>
//                   {category}
//                 </th>
//               ))}
//             </tr>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Product Group IDs
//               </th>
//               {categories.map((category, index) => (
//                 <td className="border border-gray-500 px-4 py-2" key={index}>
//                   {productGroupIDsByCategory[category].join(", ")}
//                 </td>
//               ))}
//             </tr>
//           </thead>
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               {Object.keys(productGroupIDsByCategory).map((category, index) => (
//                 <React.Fragment key={index}>
//                   {productGroupIDsByCategory[category].map((groupID, idx) => (
//                     <React.Fragment key={idx}>
//                       <th className="border border-gray-500 px-4 py-2">
//                         {groupID} (revenue)
//                       </th>
//                       <th className="border border-gray-500 px-4 py-2">
//                         {groupID} (weight)
//                       </th>
//                     </React.Fragment>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(([zone, regions]) =>
//               Object.entries(regions).map(
//                 ([region, productGroupIDs], rowIndex) => (
//                   <tr key={`${zone}-${region}`}>
//                     {rowIndex === 0 && (
//                       <td
//                         className="border border-gray-500 px-4 py-2"
//                         rowSpan={Object.keys(regions).length}
//                       >
//                         {zone}
//                       </td>
//                     )}
//                     <td className="border border-gray-500 px-4 py-2">
//                       {region}
//                     </td>
//                     {categories.map((category, categoryIndex) => (
//                       <React.Fragment
//                         key={`${zone}-${region}-${categoryIndex}`}
//                       >
//                         {productGroupIDs.map((groupID, groupIndex) => (
//                           <React.Fragment
//                             key={`${zone}-${region}-${category}-${groupIndex}`}
//                           >
//                             <td className="border border-gray-500 px-4 py-2">
//                               {groupID}
//                             </td>
//                             {groupIndex === productGroupIDs.length - 1 && (
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {groupID}
//                               </td>
//                             )}
//                           </React.Fragment>
//                         ))}
//                       </React.Fragment>
//                     ))}
//                   </tr>
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;
// test 22   SEMI FINAL
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log(result);
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone and region
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = [];
//     }
//     if (!acc[zone][region].includes(Product_Group_ID)) {
//       acc[zone][region].push(Product_Group_ID);
//     }
//     return acc;
//   }, {});

//   // Render the table
//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Customer Category
//               </th>
//               {categories.map((category, index) => (
//                 <th className="border border-gray-500 px-4 py-2" key={index}>
//                   {category}
//                 </th>
//               ))}
//             </tr>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">
//                 Product Group IDs
//               </th>
//               {/* {categories.map((category, index) => (
//                 <td className="border border-gray-500 px-4 py-2" key={index}>
//                   {productGroupIDsByCategory[category].join(", ")}
//                 </td>
//               ))} */}
//               {/* {categories.map((category, index) => (
//                 <td className="border border-gray-500 px-4 py-2" key={index}>
//                   {Object.keys(productGroupIDsByCategory).map(
//                     (category, index) => (
//                       <React.Fragment key={index}>
//                         {productGroupIDsByCategory[category].map(
//                           (groupID, idx) => (
//                             <React.Fragment key={idx}>
//                               <th className="border border-gray-500 px-4 py-2">
//                                 {groupID} (revenue)
//                               </th>
//                               <th className="border border-gray-500 px-4 py-2">
//                                 {groupID} (weight)
//                               </th>
//                             </React.Fragment>
//                           )
//                         )}
//                       </React.Fragment>
//                     )
//                   )}
//                 </td>
//               ))} */}
//               {categories.map((category, index) => (
//                 <td className="border border-gray-500 px-4 py-2" key={index}>
//                   {productGroupIDsByCategory[category].map((groupID, idx) => (
//                     <React.Fragment key={idx}>
//                       <th className="border border-gray-500 px-4 py-2">
//                         {groupID} (revenue)
//                       </th>
//                       <th className="border border-gray-500 px-4 py-2">
//                         {groupID} (weight)
//                       </th>
//                     </React.Fragment>
//                   ))}
//                 </td>
//               ))}
//             </tr>
//           </thead>
//           <thead>
//             <tr>
//               <th className="border border-gray-500 px-4 py-2">Zone</th>
//               <th className="border border-gray-500 px-4 py-2">Region</th>
//               {Object.keys(productGroupIDsByCategory).map((category, index) => (
//                 <React.Fragment key={index}>
//                   {productGroupIDsByCategory[category].map((groupID, idx) => (
//                     <React.Fragment key={idx}>
//                       <th className="border border-gray-500 px-4 py-2">
//                         {groupID} (revenue)
//                       </th>
//                       <th className="border border-gray-500 px-4 py-2">
//                         {groupID} (weight)
//                       </th>
//                     </React.Fragment>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.entries(groupedData).map(([zone, regions]) =>
//               Object.entries(regions).map(
//                 ([region, productGroupIDs], rowIndex) => (
//                   <tr key={`${zone}-${region}`}>
//                     {rowIndex === 0 && (
//                       <td
//                         className="border border-gray-500 px-4 py-2"
//                         rowSpan={Object.keys(regions).length}
//                       >
//                         {zone}
//                       </td>
//                     )}
//                     <td className="border border-gray-500 px-4 py-2">
//                       {region}
//                     </td>
//                     {categories.map((category, categoryIndex) => (
//                       <React.Fragment
//                         key={`${zone}-${region}-${categoryIndex}`}
//                       >
//                         {productGroupIDsByCategory[category].map(
//                           (groupID, groupIndex) => (
//                             <React.Fragment
//                               key={`${zone}-${region}-${category}-${groupIndex}`}
//                             >
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.find(
//                                   (entry) =>
//                                     entry.zone === zone &&
//                                     entry.region === region &&
//                                     entry.customer_category === category &&
//                                     entry.Product_Group_ID === groupID
//                                 )?.SUM_revenue || "N/A"}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.find(
//                                   (entry) =>
//                                     entry.zone === zone &&
//                                     entry.region === region &&
//                                     entry.customer_category === category &&
//                                     entry.Product_Group_ID === groupID
//                                 )?.SUM_weight || "N/A"}
//                               </td>
//                             </React.Fragment>
//                           )
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </tr>
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 23 latest best need adjustments

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log(result);
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone and region
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = [];
//     }
//     if (!acc[zone][region].includes(Product_Group_ID)) {
//       acc[zone][region].push(Product_Group_ID);
//     }
//     return acc;
//   }, {});
// // Calculate the maximum number of product group IDs among all categories
// const maxProductGroupIDs = Math.max(
//   ...categories.map((category) => productGroupIDsByCategory[category].length)
// );

// // Render the table
// return (
//   <div className="min-h-screen">
//     <div className="ml-5 mt-5">
//       <h2>Dynamic Pivot Table</h2>
//       <table className="border-collapse border border-gray-500 w-full">
//         <thead>
//           <tr>
//             <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//               Zone
//             </th>
//             <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//               Region
//             </th>
//             {categories.map((category, index) => (
//               <React.Fragment key={index}>
//                 <th
//                   colSpan={productGroupIDsByCategory[category].length * 2}
//                   className="border border-gray-500 px-4 py-2"
//                 >
//                   {category}
//                 </th>
//               </React.Fragment>
//             ))}
//           </tr>
//           <tr>
//             {categories.map((category) =>
//               productGroupIDsByCategory[category].map((groupID, idx) => (
//                 <React.Fragment key={idx}>
//                   <th className="border border-gray-500 px-4 py-2">
//                     {groupID} (revenue)
//                   </th>
//                   <th className="border border-gray-500 px-4 py-2">
//                     {groupID} (weight)
//                   </th>
//                 </React.Fragment>
//               ))
//             )}
//           </tr>
//         </thead>

//         <tbody>
//           {Object.entries(groupedData).map(([zone, regions]) =>
//             Object.entries(regions).map(([region, productGroupIDs], rowIndex) => (
//               <tr key={`${zone}-${region}`}>
//                 {rowIndex === 0 && (
//                   <React.Fragment>
//                     <td
//                       rowSpan={Object.keys(regions).length}
//                       className="border border-gray-500 px-4 py-2"
//                     >
//                       {zone}
//                     </td>
//                     <td className="border border-gray-500 px-4 py-2">{region}</td>
//                   </React.Fragment>
//                 )}
//                 {categories.map((category) =>
//                   productGroupIDsByCategory[category].map((groupID, groupIndex) => (
//                     <React.Fragment key={groupIndex}>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {data.find(
//                           (entry) =>
//                             entry.zone === zone &&
//                             entry.region === region &&
//                             entry.customer_category === category &&
//                             entry.Product_Group_ID === groupID
//                         )?.SUM_revenue || "N/A"}
//                       </td>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {data.find(
//                           (entry) =>
//                             entry.zone === zone &&
//                             entry.region === region &&
//                             entry.customer_category === category &&
//                             entry.Product_Group_ID === groupID
//                         )?.SUM_weight || "N/A"}
//                       </td>
//                     </React.Fragment>
//                   ))
//                 )}
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// };

// export default DynamicTable;

// test 24 besttttttttttttttttttttt           sucessssssssssssssssssssssssss finalllllllllllllllllllllllllll
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       console.log(result);
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone and region
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = [];
//     }
//     if (!acc[zone][region].includes(Product_Group_ID)) {
//       acc[zone][region].push(Product_Group_ID);
//     }
//     return acc;
//   }, {});
//   // Calculate the maximum number of product group IDs among all categories
//   const maxProductGroupIDs = Math.max(
//     ...categories.map((category) => productGroupIDsByCategory[category].length)
//   );

//   // Render the table
//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//                 Zone
//               </th>
//               <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//                 Region
//               </th>
//               {categories.map((category, index) => (
//                 <React.Fragment key={index}>
//                   <th
//                     colSpan={productGroupIDsByCategory[category].length * 2}
//                     className="border border-gray-500 px-4 py-2"
//                   >
//                     {category}
//                   </th>
//                 </React.Fragment>
//               ))}
//             </tr>
//             <tr>
//               {categories.map((category) =>
//                 productGroupIDsByCategory[category].map((groupID, idx) => (
//                   <React.Fragment key={idx}>
//                     <th className="border border-gray-500 px-4 py-2">
//                       {groupID} (revenue)
//                     </th>
//                     <th className="border border-gray-500 px-4 py-2">
//                       {groupID} (weight)
//                     </th>
//                   </React.Fragment>
//                 ))
//               )}
//             </tr>
//           </thead>

//           <tbody>
//             {Object.entries(groupedData).map(([zone, regions], zoneIndex) =>
//               Object.entries(regions).map(
//                 ([region, productGroupIDs], rowIndex) => (
//                   <tr key={`${zone}-${region}`}>
//                     {rowIndex === 0 && (
//                       <React.Fragment>
//                         <td
//                           rowSpan={Object.keys(regions).length}
//                           className="border border-gray-500 px-4 py-2"
//                         >
//                           {zone}
//                         </td>
//                       </React.Fragment>
//                     )}
//                     <td className="border border-gray-500 px-4 py-2">
//                       {region}
//                     </td>
//                     {categories.map((category, categoryIndex) => (
//                       <React.Fragment
//                         key={`${zone}-${region}-${categoryIndex}`}
//                       >
//                         {productGroupIDsByCategory[category].map(
//                           (groupID, groupIndex) => (
//                             <React.Fragment
//                               key={`${zone}-${region}-${category}-${groupIndex}`}
//                             >
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.find(
//                                   (entry) =>
//                                     entry.zone === zone &&
//                                     entry.region === region &&
//                                     entry.customer_category === category &&
//                                     entry.Product_Group_ID === groupID
//                                 )?.SUM_revenue || "N/A"}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {data.find(
//                                   (entry) =>
//                                     entry.zone === zone &&
//                                     entry.region === region &&
//                                     entry.customer_category === category &&
//                                     entry.Product_Group_ID === groupID
//                                 )?.SUM_weight || "N/A"}
//                               </td>
//                             </React.Fragment>
//                           )
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </tr>
//                 )
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;
// test 25 adding grand total

// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone and region
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = [];
//     }
//     if (!acc[zone][region].includes(Product_Group_ID)) {
//       acc[zone][region].push(Product_Group_ID);
//     }
//     return acc;
//   }, {});

//   // Render the table
//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//                 Zone
//               </th>
//               <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//                 Region
//               </th>
//               {categories.map((category, index) => (
//                 <React.Fragment key={index}>
//                   <th
//                     colSpan={productGroupIDsByCategory[category].length * 2}
//                     className="border border-gray-500 px-4 py-2"
//                   >
//                     {category}
//                   </th>
//                 </React.Fragment>
//               ))}
//             </tr>
//             <tr>
//               {categories.map((category) =>
//                 productGroupIDsByCategory[category].map((groupID, idx) => (
//                   <React.Fragment key={idx}>
//                     <th className="border border-gray-500 px-4 py-2">
//                       {groupID} (revenue)
//                     </th>
//                     <th className="border border-gray-500 px-4 py-2">
//                       {groupID} (weight)
//                     </th>
//                   </React.Fragment>
//                 ))
//               )}
//             </tr>
//           </thead>

//           <tbody>
//             {Object.entries(groupedData).map(([zone, regions], zoneIndex) =>
//               Object.entries(regions).map(
//                 ([region, productGroupIDs], rowIndex) => (
//                   <tr key={`${zone}-${region}`}>
//                     {rowIndex === 0 && (
//                       <React.Fragment>
//                         <td
//                           rowSpan={Object.keys(regions).length}
//                           className="border border-gray-500 px-4 py-2"
//                         >
//                           {zone}
//                         </td>
//                       </React.Fragment>
//                     )}
//                     <td className="border border-gray-500 px-4 py-2">
//                       {region}
//                     </td>
//                     {categories.map((category, categoryIndex) => (
//                       <React.Fragment
//                         key={`${zone}-${region}-${categoryIndex}`}
//                       >
//                         {productGroupIDsByCategory[category].map(
//                           (groupID, groupIndex) => {
//                             const categoryData = data.filter(
//                               (entry) =>
//                                 entry.zone === zone &&
//                                 entry.region === region &&
//                                 entry.customer_category === category &&
//                                 entry.Product_Group_ID === groupID
//                             );
//                             const totalRevenue = categoryData.reduce(
//                               (acc, curr) => acc + curr.SUM_revenue,
//                               0
//                             );
//                             const totalWeight = categoryData.reduce(
//                               (acc, curr) => acc + curr.SUM_weight,
//                               0
//                             );
//                             return (
//                               <React.Fragment
//                                 key={`${zone}-${region}-${category}-${groupIndex}`}
//                               >
//                                 <td className="border border-gray-500 px-4 py-2">
//                                   {totalRevenue || "N/A"}
//                                 </td>
//                                 <td className="border border-gray-500 px-4 py-2">
//                                   {totalWeight || "N/A"}
//                                 </td>
//                               </React.Fragment>
//                             );
//                           }
//                         )}
//                       </React.Fragment>
//                     ))}
//                   </tr>
//                 )
//               )
//             )}
//             {/* Total row for each product group ID */}
//             <tr>
//               <td colSpan="2" className="border border-gray-500 px-4 py-2">
//               Grand  Total
//               </td>
//               {categories.map((category) =>
//                 productGroupIDsByCategory[category].map((groupID, idx) => {
//                   const totalRevenue = data
//                     .filter(
//                       (entry) =>
//                         entry.customer_category === category &&
//                         entry.Product_Group_ID === groupID
//                     )
//                     .reduce((acc, curr) => acc + curr.SUM_revenue, 0);
//                   const totalWeight = data
//                     .filter(
//                       (entry) =>
//                         entry.customer_category === category &&
//                         entry.Product_Group_ID === groupID
//                     )
//                     .reduce((acc, curr) => acc + curr.SUM_weight, 0);
//                   return (
//                     <React.Fragment key={idx}>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {totalRevenue}
//                       </td>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {totalWeight}
//                       </td>
//                     </React.Fragment>
//                   );
//                 })
//               )}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

// test 26 adding subtotatl and its added but value is wrong
// import React, { useState, useEffect } from "react";

// const DynamicTable = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
//     {}
//   );

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//             Cookie:
//               "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
//           },
//           body: JSON.stringify({
//             mongoId: "660bc6abb6a9151ea1faa14b",
//           }),
//         }
//       );

//       const result = await response.json();
//       setData(result);
//       setError(null);

//       // Group data by customer category and product group ID to get unique product group IDs for each customer category
//       const groupedProductGroupIDs = result.reduce((acc, curr) => {
//         const { customer_category, Product_Group_ID } = curr;
//         if (!acc[customer_category]) {
//           acc[customer_category] = new Set();
//         }
//         acc[customer_category].add(Product_Group_ID);
//         return acc;
//       }, {});

//       // Convert the sets of product group IDs to arrays
//       const productGroupIDsByCategory = {};
//       for (const category in groupedProductGroupIDs) {
//         productGroupIDsByCategory[category] = Array.from(
//           groupedProductGroupIDs[category]
//         );
//       }
//       setProductGroupIDsByCategory(productGroupIDsByCategory);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   if (error) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (!Array.isArray(data) || data.length === 0) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         <p>No data available.</p>
//       </div>
//     );
//   }

//   const categories = Object.keys(productGroupIDsByCategory);

//   // Group data by zone and region
//   const groupedData = data.reduce((acc, curr) => {
//     const { zone, region, Product_Group_ID } = curr;
//     if (!acc[zone]) {
//       acc[zone] = {};
//     }
//     if (!acc[zone][region]) {
//       acc[zone][region] = [];
//     }
//     if (!acc[zone][region].includes(Product_Group_ID)) {
//       acc[zone][region].push(Product_Group_ID);
//     }
//     return acc;
//   }, {});

//   // Render the table
//   return (
//     <div className="min-h-screen">
//       <div className="ml-5 mt-5">
//         <h2>Dynamic Pivot Table</h2>
//         <table className="border-collapse border border-gray-500 w-full">
//           <thead>
//             <tr>
//               <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//                 Zone
//               </th>
//               <th rowSpan="2" className="border border-gray-500 px-4 py-2">
//                 Region
//               </th>
//               {categories.map((category, index) => (
//                 <React.Fragment key={index}>
//                   <th
//                     colSpan={productGroupIDsByCategory[category].length * 2}
//                     className="border border-gray-500 px-4 py-2"
//                   >
//                     {category}
//                   </th>
//                 </React.Fragment>
//               ))}
//               <th className="border border-gray-500 px-4 py-2">
//                 Row Total (revenue)
//               </th>
//               <th className="border border-gray-500 px-4 py-2">
//                 Row Total (weight)
//               </th>
//             </tr>
//             <tr>
//               {categories.map((category) =>
//                 productGroupIDsByCategory[category].map((groupID, idx) => (
//                   <React.Fragment key={idx}>
//                     <th className="border border-gray-500 px-4 py-2">
//                       {groupID} (revenue)
//                     </th>
//                     <th className="border border-gray-500 px-4 py-2">
//                       {groupID} (weight)
//                     </th>
//                   </React.Fragment>
//                 ))
//               )}
//             </tr>
//           </thead>

//           <tbody>
//             {Object.entries(groupedData).map(([zone, regions], zoneIndex) => (
//               <>
//                 {Object.entries(regions).map(
//                   ([region, productGroupIDs], rowIndex) => (
//                     <tr key={`${zone}-${region}`}>
//                       {rowIndex === 0 && (
//                         <td
//                           rowSpan={Object.keys(regions).length}
//                           className="border border-gray-500 px-4 py-2"
//                         >
//                           {zone}
//                         </td>
//                       )}
//                       <td className="border border-gray-500 px-4 py-2">
//                         {region}
//                       </td>
//                       {categories.map((category, categoryIndex) => (
//                         <React.Fragment
//                           key={`${zone}-${region}-${categoryIndex}`}
//                         >
//                           {productGroupIDsByCategory[category].map(
//                             (groupID, groupIndex) => {
//                               const categoryData = data.filter(
//                                 (entry) =>
//                                   entry.zone === zone &&
//                                   entry.region === region &&
//                                   entry.customer_category === category &&
//                                   entry.Product_Group_ID === groupID
//                               );
//                               const totalRevenue = categoryData.reduce(
//                                 (acc, curr) => acc + curr.SUM_revenue,
//                                 0
//                               );
//                               const totalWeight = categoryData.reduce(
//                                 (acc, curr) => acc + curr.SUM_weight,
//                                 0
//                               );
//                               return (
//                                 <React.Fragment
//                                   key={`${zone}-${region}-${category}-${groupIndex}`}
//                                 >
//                                   <td className="border border-gray-500 px-4 py-2">
//                                     {totalRevenue || "N/A"}
//                                   </td>
//                                   <td className="border border-gray-500 px-4 py-2">
//                                     {totalWeight || "N/A"}
//                                   </td>
//                                 </React.Fragment>
//                               );
//                             }
//                           )}
//                         </React.Fragment>
//                       ))}
//                       <td className="border border-gray-500 px-4 py-2">
//                         {Object.values(productGroupIDs).reduce(
//                           (acc, curr) => acc + curr.SUM_revenue,
//                           0
//                         )}
//                       </td>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {Object.values(productGroupIDs).reduce(
//                           (acc, curr) => acc + curr.SUM_weight,
//                           0
//                         )}
//                       </td>
//                     </tr>
//                   )
//                 )}
//                 {/* Subtotals for each zone */}
//                 <tr key={`subtotal-${zone}`}>
//                   <td colSpan={2} className="border border-gray-500 px-4 py-2">
//                     Subtotal
//                   </td>
//                   {categories.map((category) =>
//                     productGroupIDsByCategory[category].map((groupID, idx) => {
//                       const zoneData = data.filter(
//                         (entry) =>
//                           entry.zone === zone &&
//                           entry.customer_category === category &&
//                           entry.Product_Group_ID === groupID
//                       );
//                       const subtotalRevenue = zoneData.reduce(
//                         (acc, curr) => acc + curr.SUM_revenue,
//                         0
//                       );
//                       const subtotalWeight = zoneData.reduce(
//                         (acc, curr) => acc + curr.SUM_weight,
//                         0
//                       );
//                       return (
//                         <React.Fragment key={idx}>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {subtotalRevenue}
//                           </td>
//                           <td className="border border-gray-500 px-4 py-2">
//                             {subtotalWeight}
//                           </td>
//                         </React.Fragment>
//                       );
//                     })
//                   )}
//                   <td className="border border-gray-500 px-4 py-2"></td>
//                   <td className="border border-gray-500 px-4 py-2"></td>
//                 </tr>
//               </>
//             ))}
//             {/* Grand totals */}
//             <tr>
//               <td colSpan={2} className="border border-gray-500 px-4 py-2">
//                 Grand Total
//               </td>
//               {categories.map((category) =>
//                 productGroupIDsByCategory[category].map((groupID, idx) => {
//                   const totalRevenue = data
//                     .filter(
//                       (entry) =>
//                         entry.customer_category === category &&
//                         entry.Product_Group_ID === groupID
//                     )
//                     .reduce((acc, curr) => acc + curr.SUM_revenue, 0);
//                   const totalWeight = data
//                     .filter(
//                       (entry) =>
//                         entry.customer_category === category &&
//                         entry.Product_Group_ID === groupID
//                     )
//                     .reduce((acc, curr) => acc + curr.SUM_weight, 0);
//                   return (
//                     <React.Fragment key={idx}>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {totalRevenue}
//                       </td>
//                       <td className="border border-gray-500 px-4 py-2">
//                         {totalWeight}
//                       </td>
//                     </React.Fragment>
//                   );
//                 })
//               )}
//               <td className="border border-gray-500 px-4 py-2"></td>
//               <td className="border border-gray-500 px-4 py-2"></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;

//test 27 adding grandtotal vertically
import React, { useState, useEffect } from "react";

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [productGroupIDsByCategory, setProductGroupIDsByCategory] = useState(
    {}
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3500/table/getQueryData?database=DataBase1&tables=FY20_Table1&valueColumns=revenue%2Cweight&rows=zone%2Cregion&groupByFields=customer_category%2CProduct_Group_ID",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
            Cookie:
              "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6Im1vaGl0MTIzIiwicm9sZXMiOlsyMDAxLDE5ODRdfSwiaWF0IjoxNzEzMTc1MzQ1LCJleHAiOjE3MTMyNzUzNDV9.vhWJ32EfSryfkAk4mZv8hH2f2DmWbaVYc_fEzlKYSsQ",
          },
          body: JSON.stringify({
            mongoId: "660bc6abb6a9151ea1faa14b",
          }),
        }
      );

      const result = await response.json();
      setData(result);
      setError(null);

      // Group data by customer category and product group ID to get unique product group IDs for each customer category
      const groupedProductGroupIDs = result.reduce((acc, curr) => {
        const { customer_category, Product_Group_ID } = curr;
        if (!acc[customer_category]) {
          acc[customer_category] = new Set();
        }
        acc[customer_category].add(Product_Group_ID);
        return acc;
      }, {});

      // Convert the sets of product group IDs to arrays
      const productGroupIDsByCategory = {};
      for (const category in groupedProductGroupIDs) {
        productGroupIDsByCategory[category] = Array.from(
          groupedProductGroupIDs[category]
        );
      }
      setProductGroupIDsByCategory(productGroupIDsByCategory);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>No data available.</p>
      </div>
    );
  }

  const categories = Object.keys(productGroupIDsByCategory);

  // Group data by zone and region
  const groupedData = data.reduce((acc, curr) => {
    const { zone, region, Product_Group_ID } = curr;
    if (!acc[zone]) {
      acc[zone] = {};
    }
    if (!acc[zone][region]) {
      acc[zone][region] = [];
    }
    if (!acc[zone][region].includes(Product_Group_ID)) {
      acc[zone][region].push(Product_Group_ID);
    }
    return acc;
  }, {});

  // Render the table
  return (
    <div className="min-h-screen">
      <div className="ml-5 mt-5">
        <h2>Dynamic Pivot Table</h2>
        <table className="border-collapse border border-gray-500 w-full">
          <thead>
            <tr>
              <th rowSpan="2" className="border border-gray-500 px-4 py-2">
                Zone
              </th>
              <th rowSpan="2" className="border border-gray-500 px-4 py-2">
                Region
              </th>
              {categories.map((category, index) => (
                <React.Fragment key={index}>
                  <th
                    colSpan={productGroupIDsByCategory[category].length * 2}
                    className="border border-gray-500 px-4 py-2"
                  >
                    {category}
                  </th>
                </React.Fragment>
              ))}
              <th className="border border-gray-500 px-4 py-2">
                Row Total (revenue)
              </th>
              <th className="border border-gray-500 px-4 py-2">
                Row Total (weight)
              </th>
            </tr>
            <tr>
              {categories.map((category) =>
                productGroupIDsByCategory[category].map((groupID, idx) => (
                  <React.Fragment key={idx}>
                    <th className="border border-gray-500 px-4 py-2">
                      {groupID} (revenue)
                    </th>
                    <th className="border border-gray-500 px-4 py-2">
                      {groupID} (weight)
                    </th>
                  </React.Fragment>
                ))
              )}
            </tr>
          </thead>

          <tbody>
            {Object.entries(groupedData).map(([zone, regions], zoneIndex) => (
              <>
                {Object.entries(regions).map(
                  ([region, productGroupIDs], rowIndex) => {
                    // Calculate row totals
                    const regionData = data.filter(
                      (entry) => entry.zone === zone && entry.region === region
                    );
                    const rowTotalRevenue = regionData.reduce(
                      (acc, curr) => acc + curr.SUM_revenue,
                      0
                    );
                    const rowTotalWeight = regionData.reduce(
                      (acc, curr) => acc + curr.SUM_weight,
                      0
                    );

                    return (
                      <tr key={`${zone}-${region}`}>
                        {rowIndex === 0 && (
                          <td
                            rowSpan={Object.keys(regions).length}
                            className="border border-gray-500 px-4 py-2"
                          >
                            {zone}
                          </td>
                        )}
                        <td className="border border-gray-500 px-4 py-2">
                          {region}
                        </td>
                        {/* Columns for each category and groupID */}
                        {categories.map((category, categoryIndex) => (
                          <React.Fragment
                            key={`${zone}-${region}-${categoryIndex}`}
                          >
                            {productGroupIDsByCategory[category].map(
                              (groupID, groupIndex) => {
                                const categoryData = data.filter(
                                  (entry) =>
                                    entry.zone === zone &&
                                    entry.region === region &&
                                    entry.customer_category === category &&
                                    entry.Product_Group_ID === groupID
                                );
                                const totalRevenue = categoryData.reduce(
                                  (acc, curr) => acc + curr.SUM_revenue,
                                  0
                                );
                                const totalWeight = categoryData.reduce(
                                  (acc, curr) => acc + curr.SUM_weight,
                                  0
                                );
                                return (
                                  <React.Fragment
                                    key={`${zone}-${region}-${category}-${groupIndex}`}
                                  >
                                    <td className="border border-gray-500 px-4 py-2">
                                      {totalRevenue || ""}
                                    </td>
                                    <td className="border border-gray-500 px-4 py-2">
                                      {totalWeight || ""}
                                    </td>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </React.Fragment>
                        ))}
                        {/* Print row totals */}
                        <td className="border border-gray-500 px-4 py-2">
                          {rowTotalRevenue}
                        </td>
                        <td className="border border-gray-500 px-4 py-2">
                          {rowTotalWeight}
                        </td>
                      </tr>
                    );
                  }
                )}
                {/* Subtotals for each zone */}
                <tr key={`subtotal-${zone}`}>
                  <td colSpan={2} className="border border-gray-500 px-4 py-2">
                    Subtotal
                  </td>
                  {categories.map((category) =>
                    productGroupIDsByCategory[category].map((groupID, idx) => {
                      const zoneData = data.filter(
                        (entry) =>
                          entry.zone === zone &&
                          entry.customer_category === category &&
                          entry.Product_Group_ID === groupID
                      );
                      const subtotalRevenue = zoneData.reduce(
                        (acc, curr) => acc + curr.SUM_revenue,
                        0
                      );
                      const subtotalWeight = zoneData.reduce(
                        (acc, curr) => acc + curr.SUM_weight,
                        0
                      );
                      return (
                        <React.Fragment key={idx}>
                          <td className="border border-gray-500 px-4 py-2">
                            {subtotalRevenue}
                          </td>
                          <td className="border border-gray-500 px-4 py-2">
                            {subtotalWeight}
                          </td>
                        </React.Fragment>
                      );
                    })
                  )}
                  <td className="border border-gray-500 px-4 py-2"></td>
                  <td className="border border-gray-500 px-4 py-2"></td>
                </tr>
              </>
            ))}
            {/* Grand totals */}
            <tr>
              <td colSpan={2} className="border border-gray-500 px-4 py-2">
                Grand Total
              </td>
              {categories.map((category) =>
                productGroupIDsByCategory[category].map((groupID, idx) => {
                  const totalRevenue = data
                    .filter(
                      (entry) =>
                        entry.customer_category === category &&
                        entry.Product_Group_ID === groupID
                    )
                    .reduce((acc, curr) => acc + curr.SUM_revenue, 0);
                  const totalWeight = data
                    .filter(
                      (entry) =>
                        entry.customer_category === category &&
                        entry.Product_Group_ID === groupID
                    )
                    .reduce((acc, curr) => acc + curr.SUM_weight, 0);
                  return (
                    <React.Fragment key={idx}>
                      <td className="border border-gray-500 px-4 py-2">
                        {totalRevenue}
                      </td>
                      <td className="border border-gray-500 px-4 py-2">
                        {totalWeight}
                      </td>
                    </React.Fragment>
                  );
                })
              )}
              <td className="border border-gray-500 px-4 py-2"></td>
              <td className="border border-gray-500 px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
