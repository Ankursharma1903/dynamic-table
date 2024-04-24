"use client";
import React, { useState, useEffect, useRef } from "react";
import "./app.css";
import {
  PivotViewComponent,
  Inject,
  FieldList,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting,
  SaveReportArgs,
  FetchReportArgs,
  LoadReportArgs,
  RemoveReportArgs,
  RenameReportArgs,
  ToolbarArgs,
  NumberFormatting,
} from "@syncfusion/ej2-react-pivotview";
import { pivotData } from "./data";
import { saveAs } from "file-saver";

// function Table() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   //   Product_Group_ID
//   //   :
//   //   "ES"
//   //   SUM_revenue
//   //   :
//   //   3386
//   //   SUM_weight
//   //   :
//   //   39.9
//   //   customer_category
//   //   :
//   //   "CP"
//   //   region
//   //   :
//   //   "J"
//   //   zone
//   //   :
//   //   "INN"
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
//       console.log("Fetched data:", result); // Log the fetched data
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
//   const dataSourceSettings = {
//     enableSorting: true,
//     rows: [
//       { name: "zone", showSubTotals: true, expanded: true },
//       { name: "region", showSubTotals: true, expanded: true },
//     ],
//     valueSortSettings: { headerDelimiter: " - " },
//     values: [
//       { name: "SUM_revenue", caption: "Total Revenue" },
//       { name: "SUM_weight", caption: "Total Weight" },
//       {
//         name: "total",
//         caption: "total units",
//         type: "CalculatedField", // for now not working
//       },
//     ],
//     dataSource: data,
//     columns: [
//       { name: "customer_category", showSubTotals: true, expanded: true },
//       { name: "Product_Group_ID", showSubTotals: true, expanded: true },
//     ],
//     filters: [{ name: "Zone" }],
//     CalculatedFieldSettings: [
//       {
//         name: "total",
//         formula: '"Sum(SUM_revenue)"+"Sum(SUM_weight)"',
//       },
//     ], //this specify for total and formula by which we want that calculation
//     ConditionalFormatSettings: [
//       {
//         measure: "SUM_revenue", // is datasource field
//         conditions: "Between",
//         value1: 1000,
//         value2: 20000,
//         style: {
//           backgroundColor: "#80cbc4",
//           color: "black",
//           fontFamily: "Tahoma",
//           fontSize: "12px",
//         },
//       },
//       {
//         conditions: "LessThan",
//         value1: 1000,
//         style: {
//           backgroundColor: "#OOFFFF",
//           color: "black",
//           fontFamily: "Tahoma",
//           fontSize: "12px",
//         },
//       },
//     ],
//   };
//   const downloadCSV = () => {
//     const csvData = convertToCSV(data);
//     const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
//     saveAs(blob, "pivot_data.csv");
//   };

//   const convertToCSV = (data) => {
//     const header = Object.keys(data[0]).join(",");
//     const rows = data.map((obj) => Object.values(obj).join(","));
//     return [header, ...rows].join("\n");
//   };
//   let pivotObj;
//   let toolbarOptions = [
//     "New",
//     "Save",
//     "SaveAs",
//     "Rename",
//     "Remove",
//     "Load",
//     "Grid",
//     "Chart",
//     "Export",
//     "SubTotal",
//     "GrandTotal",
//     "Formatting",
//     "FieldList",
//   ];
//   function saveReport(args) {
//     let reports = [];
//     let isSaved = false;
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       reports = JSON.parse(localStorage.pivotviewReports);
//     }
//     if (args.report && args.reportName && args.reportName !== "") {
//       reports.map(function (item) {
//         if (args.reportName === item.reportName) {
//           item.report = args.report;
//           isSaved = true;
//         }
//       });
//       if (!isSaved) {
//         reports.push(args);
//       }
//       localStorage.pivotviewReports = JSON.stringify(reports);
//     }
//   }
//   function fetchReport(args) {
//     let reportCollection = [];
//     let reeportList = [];
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       reportCollection = JSON.parse(localStorage.pivotviewReports);
//     }
//     reportCollection.map(function (item) {
//       reeportList.push(item.reportName);
//     });
//     args.reportName = reeportList;
//   }
//   function loadReport(args) {
//     let reportCollection = [];
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       reportCollection = JSON.parse(localStorage.pivotviewReports);
//     }
//     reportCollection.map(function (item) {
//       if (args.reportName === item.reportName) {
//         args.report = item.report;
//       }
//     });
//     if (args.report) {
//       pivotObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
//     }
//   }
//   function removeReport(args) {
//     let reportCollection = [];
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       reportCollection = JSON.parse(localStorage.pivotviewReports);
//     }
//     for (let i = 0; i < reportCollection.length; i++) {
//       if (reportCollection[i].reportName === args.reportName) {
//         reportCollection.splice(i, 1);
//       }
//     }
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       localStorage.pivotviewReports = JSON.stringify(reportCollection);
//     }
//   }
//   function renameReport(args) {
//     let reportsCollection = [];
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       reportsCollection = JSON.parse(localStorage.pivotviewReports);
//     }
//     if (args.isReportExists) {
//       for (let i = 0; i < reportsCollection.length; i++) {
//         if (reportsCollection[i].reportName === args.rename) {
//           reportsCollection.splice(i, 1);
//         }
//       }
//     }
//     reportsCollection.map(function (item) {
//       if (args.reportName === item.reportName) {
//         item.reportName = args.rename;
//       }
//     });
//     if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
//       localStorage.pivotviewReports = JSON.stringify(reportsCollection);
//     }
//   }
//   function newReport() {
//     pivotObj.setProperties(
//       {
//         dataSourceSettings: {
//           columns: [],
//           rows: [],
//           values: [],
//           filters: [],
//           ConditionalFormatSettings: [],
//         },
//       },
//       false
//     );
//   }
//   function beforeToolbarRender(args) {
//     args.customToolbar.splice(6, 0, {
//       type: "Separator",
//     });
//     args.customToolbar.splice(9, 0, {
//       type: "Separator",
//     });
//   }
//   function chartOnLoad(args) {
//     let selectedTheme = location.hash.split("/")[1];
//     selectedTheme = selectedTheme ? selectedTheme : "Material";
//     args.chart.theme = (
//       selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
//     ).replace(/-dark/i, "Dark");
//   }
//   return (
//     <div className="App mt-20">
//       {" "}
//       <button onClick={downloadCSV}>Download CSV</button>
//       <PivotViewComponent
//         id="PivotView"
//         dataSourceSettings={dataSourceSettings}
//         width={"100%"}
//         height={"500"}
//         showFieldList={true}
//         allowCalculatedField={true}
//         editSettings={{
//           mode: "Batch",
//           allowInlineEditing: true,
//           allowCommandColumns: true,
//           allowEditing: true,
//           allowAdding: true,
//           allowDeleting: true,
//         }}
//         allowConditionalFormatting={true}
//         showToolbar={true}
//         // toolbar={["ConditionalFormatting"]}
//         toolbar={toolbarOptions}
//         allowExcelExport={true}
//         allowNumberFormatting={true}
//         allowPdfExport={true}
//         newReport={newReport.bind(this)}
//         renameReport={renameReport.bind(this)}
//         removeReport={removeReport.bind(this)}
//         loadReport={loadReport.bind(this)}
//         fetchReport={fetchReport.bind(this)}
//         saveReport={saveReport.bind(this)}
//         toolbarRender={beforeToolbarRender.bind(this)}
//         chartSettings={{
//           title: "Sales Analysis",
//           load: chartOnLoad.bind(this),
//         }}
//       >
//         <Inject
//           services={[
//             FieldList,
//             CalculatedField,
//             ConditionalFormatting,
//             Toolbar,
//             PDFExport,
//             ExcelExport,
//             NumberFormatting,
//           ]}
//         ></Inject>
//       </PivotViewComponent>
//     </div>
//   );
// }

// export default Table;

// best till now with all the functionalities

function Table() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const pivotObjRef = useRef(null); // Create a reference to PivotViewComponent

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
            Authorization: "Bearer <your-access-token>",
          },
          body: JSON.stringify({
            mongoId: "660bc6abb6a9151ea1faa14b",
          }),
        }
      );

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const dataSourceSettings = {
    enableSorting: true,
    rows: [
      { name: "zone", showSubTotals: true, expanded: true },
      { name: "region", showSubTotals: true, expanded: true },
    ],
    valueSortSettings: { headerDelimiter: " - " },
    values: [
      { name: "SUM_revenue", caption: "Total Revenue" },
      { name: "SUM_weight", caption: "Total Weight" },
      {
        name: "total",
        caption: "total units",
        type: "CalculatedField", // for now not working
      },
    ],
    dataSource: data,
    columns: [
      { name: "customer_category", showSubTotals: true, expanded: true },
      { name: "Product_Group_ID", showSubTotals: true, expanded: true },
    ],
    filters: [{ name: "Zone" }],
    CalculatedFieldSettings: [
      {
        name: "total",
        formula: '"Sum(SUM_revenue)"+"Sum(SUM_weight)"',
      },
    ], //this specify for total and formula by which we want that calculation
    ConditionalFormatSettings: [
      {
        measure: "SUM_revenue", // is datasource field
        conditions: "Between",
        value1: 1000,
        value2: 20000,
        style: {
          backgroundColor: "#80cbc4",
          color: "black",
          fontFamily: "Tahoma",
          fontSize: "12px",
        },
      },
      {
        conditions: "LessThan",
        value1: 1000,
        style: {
          backgroundColor: "#OOFFFF",
          color: "black",
          fontFamily: "Tahoma",
          fontSize: "12px",
        },
      },
    ],
  };
  let toolbarOptions = [
    "New",
    "Save",
    "SaveAs",
    "Rename",
    "Remove",
    "Load",
    "Grid",
    "Chart",
    "Export",
    "SubTotal",
    "GrandTotal",
    "Formatting",
    "FieldList",
  ];
  const newReport = () => {
    if (pivotObjRef.current) {
      // Check if pivotObjRef is initialized
      pivotObjRef.current.setProperties({
        dataSourceSettings: {
          columns: [],
          rows: [],
          values: [],
          filters: [],
          ConditionalFormatSettings: [],
        },
      });
    }
  };

  const downloadCSV = () => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "pivot_data.csv");
  };

  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(",");
    const rows = data.map((obj) => Object.values(obj).join(","));
    return [header, ...rows].join("\n");
  };

  function saveReport(args) {
    let reports = [];
    let isSaved = false;
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reports = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.report && args.reportName && args.reportName !== "") {
      reports.map(function (item) {
        if (args.reportName === item.reportName) {
          item.report = args.report;
          isSaved = true;
        }
      });
      if (!isSaved) {
        reports.push(args);
      }
      localStorage.pivotviewReports = JSON.stringify(reports);
    }
  }
  function fetchReport(args) {
    let reportCollection = [];
    let reeportList = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    reportCollection.map(function (item) {
      reeportList.push(item.reportName);
    });
    args.reportName = reeportList;
  }
  function loadReport(args) {
    if (pivotObjRef.current) {
      let reportCollection = [];
      if (
        localStorage.pivotviewReports &&
        localStorage.pivotviewReports !== ""
      ) {
        reportCollection = JSON.parse(localStorage.pivotviewReports);
      }
      reportCollection.map(function (item) {
        if (args.reportName === item.reportName) {
          args.report = item.report;
        }
      });
      if (args.report) {
        pivotObjRef.current.dataSourceSettings = JSON.parse(
          args.report
        ).dataSourceSettings;
      }
    } else {
      console.error("PivotViewComponent is not yet rendered or is unmounted.");
    }
  }

  function removeReport(args) {
    let reportCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportCollection = JSON.parse(localStorage.pivotviewReports);
    }
    for (let i = 0; i < reportCollection.length; i++) {
      if (reportCollection[i].reportName === args.reportName) {
        reportCollection.splice(i, 1);
      }
    }
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportCollection);
    }
  }
  function renameReport(args) {
    let reportsCollection = [];
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      reportsCollection = JSON.parse(localStorage.pivotviewReports);
    }
    if (args.isReportExists) {
      for (let i = 0; i < reportsCollection.length; i++) {
        if (reportsCollection[i].reportName === args.rename) {
          reportsCollection.splice(i, 1);
        }
      }
    }
    reportsCollection.map(function (item) {
      if (args.reportName === item.reportName) {
        item.reportName = args.rename;
      }
    });
    if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
      localStorage.pivotviewReports = JSON.stringify(reportsCollection);
    }
  }

  function beforeToolbarRender(args) {
    args.customToolbar.splice(6, 0, {
      type: "Separator",
    });
    args.customToolbar.splice(9, 0, {
      type: "Separator",
    });
  }
  function chartOnLoad(args) {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    ).replace(/-dark/i, "Dark");
  }
  return (
    <div className="App mt-20">
      <button onClick={downloadCSV}>Download CSV</button>
      <PivotViewComponent
        id="PivotView"
        dataSourceSettings={dataSourceSettings}
        width={"100%"}
        height={"500"}
        showFieldList={true}
        allowCalculatedField={true}
        editSettings={{
          mode: "Batch",
          allowInlineEditing: true,
          allowCommandColumns: true,
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }}
        allowConditionalFormatting={true}
        showToolbar={true}
        // toolbar={["ConditionalFormatting"]}
        toolbar={toolbarOptions}
        allowExcelExport={true}
        allowNumberFormatting={true}
        allowPdfExport={true}
        newReport={newReport.bind(this)}
        renameReport={renameReport.bind(this)}
        removeReport={removeReport.bind(this)}
        loadReport={loadReport.bind(this)}
        fetchReport={fetchReport.bind(this)}
        saveReport={saveReport.bind(this)}
        toolbarRender={beforeToolbarRender.bind(this)}
        chartSettings={{
          title: "Sales Analysis",
          load: chartOnLoad.bind(this),
        }}
        gridSettings={{
          rowHeight: 50,
          columnWidth: 100,
          allowAutoResizing: true,
          allowResizing: true,
          allowReordering: true,
        }}
      >
        <Inject
          services={[
            FieldList,
            CalculatedField,
            ConditionalFormatting,
            Toolbar,
            PDFExport,
            ExcelExport,
            NumberFormatting,
          ]}
        ></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default Table;
