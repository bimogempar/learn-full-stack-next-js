import Link from 'next/link'
export default function home() {
  return (
    <div className="p-5">
      <div>
        <h1>
          This is home
        </h1>
      </div>
      <Link href="#">
        <button className="bg-red-500 hover:bg-red-700 rounded p-2 text-white">Hello</button>
      </Link>
    </div>
  )
}