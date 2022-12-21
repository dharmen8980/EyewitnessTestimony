import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Papa from "papaparse";

const AdminPage = ({ access }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/api/get/AfricanAmerican").then(
      (response) => {
        setTableData(response.data);
      }
    );
  });
  //create a reference to store the link element
  const linkRef = useRef();

  //convet the table data to csv format
  const csvData = Papa.unparse(tableData);

  //create a link element and set the href attribute to the csv data
  const link = document.createElement("a");

  //set the link's href to a data URI containing the csv data
  link.href = "data:text/csv;charset=utf-8," + encodeURI(csvData);

  //set the link's download attribute to the file name
  link.download = "AfricanAmericanData.csv";

  //attach the link element to the ref
  linkRef.current = link;

  function handleDownload() {
    //append the link to the page
    document.body.appendChild(linkRef.current);

    //click the link to trigger the download
    linkRef.current.click();

    // remove the link from the page
    linkRef.current.remove();
  }

  return access ? (
    <div className="text-white text-xl h-screen">
      <div className="text-right">
        <p className="text-center mt-10 text-2xl">This is the table for AfricanAmerican</p>
        <button className="mb-10 mr-4 bg-blue-900 px-3 py-1 font-mono text-2xl"
        onClick={handleDownload}>Download</button>
      </div>
      <div className="w-[70rem]  h-[70rem] overflow-auto mx-auto">
        <table className="table-auto border-white border-4 bg-[#4d4e50] p-1">
          <thead className="">
            <tr className="">
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">Name</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">Age</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">Ethnicity</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">Gender</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">option1</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">
                option1
                <br />
                Confidence
              </th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">option2</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">
                option2
                <br />
                Confidence
              </th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">option3</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">
                option3
                <br />
                Confidence
              </th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">option4</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">
                option4
                <br />
                Confidence
              </th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">option5</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">
                option5
                <br />
                Confidence
              </th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">option6</th>
              <th className="px-4 py-2 sticky top-0 bg-[#4d4e50]">
                option6
                <br />
                Confidence
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr>
                <td className="border px-4 py-2">{row.Name}</td>
                <td className="border px-4 py-2">{row.Age}</td>
                <td className="border px-4 py-2">{row.Ethnicity}</td>
                <td className="border px-4 py-2">{row.Gender}</td>
                <td className="border px-4 py-2">{row.option1}</td>
                <td className="border px-4 py-2">{row.option1Confidence}</td>
                <td className="border px-4 py-2">{row.option2}</td>
                <td className="border px-4 py-2">{row.option2Confidence}</td>
                <td className="border px-4 py-2">{row.option3}</td>
                <td className="border px-4 py-2">{row.option3Confidence}</td>
                <td className="border px-4 py-2">{row.option4}</td>
                <td className="border px-4 py-2">{row.option4Confidence}</td>
                <td className="border px-4 py-2">{row.option5}</td>
                <td className="border px-4 py-2">{row.option5Confidence}</td>
                <td className="border px-4 py-2">{row.option6}</td>
                <td className="border px-4 py-2">{row.option6Confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className="text-white  text-center m-auto align-middle w-fit">
      <h1 className="text-white">You are not allowed to access this page.</h1>
      <h1 className="text-white">Please singin first!</h1>
      <Link href="/signin">here</Link>
    </div>
  );
};

export default AdminPage;
