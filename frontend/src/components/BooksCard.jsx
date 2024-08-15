import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle, BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import BookSingleCard from './BookSingleCard'


const BooksCard = ({ books }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          books.map((book) => (
            <BookSingleCard key={book._id} book={book}/>
          ))
        }
      </div>

    </div>
  )
}

export default BooksCard
