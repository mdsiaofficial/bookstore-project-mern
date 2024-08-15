import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
const ShowBook = () => {

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  // console.log(book);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        // console.log(res.data);
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Book</h1>
      {
        loading ? (
          <Spinner/>
        ) : (
            <div className="flex flex-col border-2 border-blue-700 rounded-xl w-fit p-4">
              <div className="my-4">
                <span className='text-xl mr-4 text-gray-800'>ID</span>
                <span className=''>{book._id}</span>
              </div>
              <div className="my-4">
                <span className='text-xl mr-4 text-gray-800'>Title</span>
                <span className=''>{book.title}</span>
              </div>
              <div className="my-4">
                <span className='text-xl mr-4 text-gray-800'>Author</span>
                <span className=''>{book.author}</span>
              </div>
              <div className="my-4">
                <span className='text-xl mr-4 text-gray-800'>Publish Year</span>
                <span className=''>{book.publishYear}</span>
              </div>
              <div className="my-4">
                <span className='text-xl mr-4 text-gray-800'>Create Time</span>
                <span className=''>{new Date(book.createdAt).toString()}</span>
              </div>
              <div className="my-4">
                <span className='text-xl mr-4 text-gray-800'>Last Update Time</span>
                <span className=''>{new Date(book.updatedAt).toString()}</span>
              </div>
            </div>
        )
      }
    </div>
  )
}

export default ShowBook
