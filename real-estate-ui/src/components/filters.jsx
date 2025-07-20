import React from "react";

const filters = ({ filters, setfilters }) => {
  const update = (e) => {
    setfilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-4 p-4">
      <input name="minPrice" placeholder="Min Budget" onChange={update} />
      <input name="maxPrice" placeholder="Max Budget" onChange={update} />
      <select name="type" onChange={update}>
        <option value="">All Types</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Plot</option>
      </select>
      <select name="bhk" onChange={update}>
        <option value="">Any BHK</option>
        <option>1BHK</option>
        <option>2BHK</option>
        <option>3BHK</option>
      </select>
    </div>
  );
};

export default filters;