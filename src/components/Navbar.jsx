import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-pink-600 px-4 py-3 font-bold rounded">
        <Link className="text-white " href={"/"}>PrakashCoders</Link>
        <Link className="bg-white p-2 rounded" href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar