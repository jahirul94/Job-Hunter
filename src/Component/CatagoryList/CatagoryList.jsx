import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const CatagoryList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
         <div className="text-center my-12">
              <h1 className="text-4xl font-bold mb-4">Job Category List</h1>
              <p className="font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>

      <div className="flex justify-around">
        {data.map((singleData) => (
          <SingleData
            key={singleData.jobsAvailable}
            data={singleData}
          ></SingleData>
        ))}
      </div>
    </div>
  );
};

export default CatagoryList;
