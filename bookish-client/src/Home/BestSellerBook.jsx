import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBook = () => {
    const [ books , setBooks ] = useState([]) ;
    useEffect(() => {
        fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    },[])
  return (
    <div className=''>
      <BookCards books={books} headline="Best Books"/>
    </div>
  )
}

export default BestSellerBook
