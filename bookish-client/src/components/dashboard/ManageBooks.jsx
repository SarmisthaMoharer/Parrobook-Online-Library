import { useEffect, useState } from 'react'

import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks,setAllBooks] = useState([]);

  useEffect (() => {
    fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully!!!!");
      //setAllBooks(data);
    });
  }

  return (
    <div className='px-4 my-12'>
     <h1 className='mb-8 text-3xl font-bold bg-gradient-to-r from-gray-500 via-black to-slate-500 bg-clip-text text-transparent '>Manage Your Books</h1>

     <Table className='lg:w-[1100px]' striped>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => 
            <Table.Body key={book._id} className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$20.00</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={()=> handleDelete(book._id)} className='bg-red-500 px-4 py-2 font-semibold text-white hover:bg-rose-800 rounded-sm'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>
          )
        }
        
      </Table>
    
    
    </div>
  )
}

export default ManageBooks
