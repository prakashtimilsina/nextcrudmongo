import React from "react";

const AddTopic = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-400 rounded px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="border border-slate-400 rounded px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <button className="bg-green-500 font-bold rounded text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
