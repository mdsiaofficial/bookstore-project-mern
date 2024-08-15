import React from 'react'
import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
const BookModal = ({ book, onClose }) => {
  return (
    <div>
      <div className="fixed bg-gray-800 bg-opacity-65 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={onClose}>
        <div className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative" onClick={(e) => e.stopPropagation()}>
          <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' onClick={onClose} />

          <h2 className='w-fit px-4 py-1 bg-red-300 rounded-xl'>{book.publishYear}</h2>

          <h4 className='my-2 text-gray-300'> {book._id}</h4>

          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className='text-red-500 text-2xl' />
            <h2 className='my-1'>{book.title} </h2>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className='text-red-500 text-2xl' />
            <h2 className='my-1'>{book.author} </h2>
          </div>

          <p className='mt-4'>Anything to show</p>
          <p className='my-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem labore nihil, suscipit ad quos recusandae quas adipisci. Culpa fugit consequuntur debitis fugiat dolorum adipisci nobis ullam sint dicta. Labore?</p>
        </div>
      </div>
    </div>
  )
}

export default BookModal
