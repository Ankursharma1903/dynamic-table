"use client";
import React, { useState, useEffect } from "react";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";
import TableRenderers from "react-pivottable/TableRenderers";
import Plot from "react-plotly.js";
import createPlotlyRenderers from "react-pivottable/PlotlyRenderers";

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);
function Table2() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [state, setState] = useState({});

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
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  const handleChange = (newState) => {
    // Update the state based on the new state passed
    setState(newState);
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
  console.log(data);
  return (
    <div>
      <PivotTableUI data={data} onChange={handleChange} />
    </div>
  );
}

export default Table2;
