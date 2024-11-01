import { useState } from "react";
import { Button, Label, TextInput , Textarea , Select} from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [

    "Fiction",
    "Non-Fiction",
    "Science",
    "Programming",
    "Science Fiction",
    "History",
    "Horror",
    "Thriller",
    "Mystery",
    "Adventure",
    "Fantasy",
    "Religion",
    "Autobiography",
    "Adult Books",
    "Cooking",
    "Art",
    "Business",
    "Sports",
    "Romance",
    "Spiritual",
    "Children Books",
    "Travel",
    "Medical",
    "Comics",
    "Poetry",
    "Magazines",
    "Diaries",
    "Psychology",
    "Social Studies",
    "Language",
    "Literature",
    "Geography",
    "Art History",
    "Science History",
    "Philosophy",
    "Education",
    "Business Administration",
    "Marketing",
    "Finance",
    "Health",
    "Self-Help",
    "Photography",
    "Music",
    "Dance",
    "Young Adult Fantasy",
    "Graphic Novels & Comics"
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const bookDescription = form.bookDescription.value;
    const category = form.categoryName.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObject = {
      bookTitle,
      authorName,
      imageURL,
      bookDescription,
      category,
      bookPDFURL,
    }
    console.log(bookObject);

    //send data to db

    fetch("http://localhost:8000/upload-book",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObject)
    }).then(res => res.json()).then( data => {
      alert("Book is Uploaded Successfully!!!!");
      form.reset();
    } );


  };

  return (
    <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold bg-gradient-to-r from-black via-gray-500 to-slate-700 bg-clip-text text-transparent '>Upload a Book</h1>
    
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col flex-wrap gap-4">
      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" name="authorName" type="text" placeholder="Author" required />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select name="categoryName" id="inputState" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              }
            </Select>
        </div>
      </div>
      <div className="">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" type="text"  className="w-full rounded" placeholder=" Write book description here......" required rows={4}/>
      </div> 
      <div className="w-full rounded">
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" className="w-full rounded" type="text" placeholder="Book PDF URL" required shadow />
      </div>
      
      <Button type="submit" className="bg-teal-700 hover:bg-gray-700 text-white mt-5">Upload Book</Button>

    </form>
    </div>
  )
}

export default UploadBook
