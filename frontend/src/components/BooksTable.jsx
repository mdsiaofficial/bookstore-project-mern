import React, { useState } from 'react'
import { BiShow } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BookModal from './BookModal'

const BooksTable = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => {
    setShowModal((prev) => !prev);
  }
  return (
    <div>
      <table className='w-full border-separate border-spacing-2'>

        <thead>
          <tr>
            <th className='border border-slate-700 rounded-lg'>No</th>
            <th className='border border-slate-700 rounded-lg'>Title</th>
            <th className='border border-slate-700 rounded-lg max-md:hidden'>Author</th>
            <th className='border border-slate-700 rounded-lg max-md:hidden'>Publish Year</th>
            <th className='border border-slate-700 rounded-lg'>Operations</th>
          </tr>
        </thead>

        <tbody>
          {
            books.map((book, index) => (
              <tr key={book._id} className='h-8 bg-transparent hover:bg-slate-200'>
                <td className='border border-slate-800 rounded-lg text-center'>{index + 1}</td>
                <td className='border border-slate-800 rounded-lg text-center'>{book.title}</td>
                <td className='border border-slate-800 rounded-lg text-center max-md:hidden'>{book.author}</td>
                <td className='border border-slate-800 rounded-lg text-center max-md:hidden'>{book.publishYear}</td>
                <td className='border border-slate-800 rounded-lg text-center'>
                  <div className="flex justify-center gap-x-4">
                    <BiShow className='text-2xl text-blue-400 hover:text-green-800 max-md:hidden' onClick={onClose} />
                    {
                      showModal && (
                        <div>
                          <BookModal book={book} onClose={onClose} />
                        </div>
                      )
                    }
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-600' />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <MdOutlineAddBox className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-800' />
                    </Link>
                  </div>
                </td>
              </tr>

            ))
          }
        </tbody>

      </table>


    </div>
  )
}

export default BooksTable
