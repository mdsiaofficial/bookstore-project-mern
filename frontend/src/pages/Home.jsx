import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
// import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md'
import BooksTable from '../components/BooksTable'
import BooksCard from '../components/BooksCard'

const Home = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      })

  }, []);
  return (
    <div className='p-4'>
      <div className="flex justify-center items-center gap-x-4 text-white">
        <button onClick={() => setShowType("table")} className='bg-blue-500 hover:bg-blue-700 p-3 rounded-xl'>Table</button>
        <button onClick={() => setShowType("card")} className='bg-indigo-500 hover:bg-indigo-700  p-3 rounded-xl'>Card</button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className='text-3xl my-8'>Book List</h1>
        <Link to={`/books/create`}>
          <MdOutlineAddBox className='text-sky-600 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        showType === "table" ? (
          <div>
            <BooksTable books={books} />
          </div>) : (
          <div>
            <BooksCard books={books} />
          </div>
        )
      )
      }

    </div>
  )
}

export default Home
