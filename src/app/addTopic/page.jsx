'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!title || !description) {
      alert('Title and Description are required');
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics',{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok){
        router.push("/");
      }else{
        throw new Error('Failed to create the topic.')
      }
    } catch (error) {
      console.log("Error Occurred while adding topics" + error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        className="border border-slate-400 rounded px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e)=>setDescription(e.target.value)}
        value={description}
        className="border border-slate-400 rounded px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <button type='submit' className="bg-green-500 font-bold rounded text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
