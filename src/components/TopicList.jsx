import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from 'react-icons/hi';

const TopicList = () => {
  return (
    <div className="flex justify-between items-start gap-5 border border-slate-400 rounded my-4 p-4">
      <div>
        <h2 className="font-bold text-2xl">Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
        <HiPencilAlt size={24}/>
        </Link>
      </div>
    </div>
  );
};

export default TopicList;
