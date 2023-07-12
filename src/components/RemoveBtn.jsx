'use client';
import {HiOutlineTrash} from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async()=>{
    const isConfirmed = confirm('Are you sure to delete?')
    if(isConfirmed){
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method: "DELETE",
      });
      if(res.ok){
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removeTopic} className='text-red-600'>
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn;