import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateBooks = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);

    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Please check again!");
        console.log(error);
      });
    
  }
  return (
    <div>
      
      <div className="p-4">
        <BackButton />
        
        <h1 className='text-3xl my-4'>Create New Book</h1>

        {
          loading? (<Spinner/>):("")
        }

        <div className="flex flex-col border-2 border-blue-500 rounded-xl w-[600px] p-4 mx-auto">

          <div className="my-4">
            <label htmlFor="title" className='text-xl mr-4 text-gray-800'>Title</label>
            <input value={title} onChange={(e)=>(setTitle(e.target.value))} className='border-2 border-gray-600 px-4 py-2 w-full' type="text" name='title' id='title' />
          </div>
          <div className="my-4">
            <label htmlFor="author" className='text-xl mr-4 text-gray-800'>Author</label>
            <input value={author} onChange={(e)=>(setAuthor(e.target.value))} className='border-2 border-gray-600 px-4 py-2 w-full' type="text" name='author' id='author' />
          </div>
          <div className="my-4">
            <label htmlFor="publishYear" className='text-xl mr-4 text-gray-800'>Publish Year</label>
            <input value={publishYear} onChange={(e)=>(setPublishYear(e.target.value))} className='border-2 border-gray-600 px-4 py-2 w-full' type="text" name='publishYear' id='publishYear' />
          </div>

          <button onClick={handleSaveBook} className='border-2 border-gray-600 p-2'>Create Book</button>

        </div>
      </div>
    </div>
  )
}

export default CreateBooks
