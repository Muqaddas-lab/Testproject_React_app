import React, { useEffect, useState } from "react";
import axios from "axios";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [showList, setShowList] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("No access to data");
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-extrabold text-center text-indigo-800 mb-4">
          🌟 Parent Component
        </h1>

        {error && (
          <p className="text-red-600 font-semibold text-center mb-2">{error}</p>
        )}

        <input
          type="text"
          placeholder="🔍 Search by name..."
          className="w-full border border-indigo-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        <Child1 onButtonClick={() => setShowList(true)} />

        <div className="mt-6">
          <Child2 showList={showList} items={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Parent;
