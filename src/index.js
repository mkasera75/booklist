import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const books=[
    {
        src:"https://picsum.photos/300/200",
        title:"title 1",
        author:"author 1",
        id:1
    },
    {
        src:"https://picsum.photos/300/210",
        title:"title 2",
        author:"author2",
        id:2
    },
    {
        src:"https://picsum.photos/300/201",
        title:"title3",
        author:"author3",
        id:3
    }

]
function BookList() {
    const getBook=(id)=>{
        const book=books.find((book)=> book.id===id)
    }
   
    return <>
        <h1>amazon best sellers</h1>
        <section className="booklist">
        {books.map((book,index)=>{
            return <Book {...book} getBook={getBook} key={book.id} index={index+1}></Book> 
        })};
        </section>
   

    </>
}
const Book=({src,title,author,id,getBook,index})=>{
    return <article className="book">
        <img src={src}  />
        <h4>{title}</h4>
        <h4>{author}</h4>
        {/* <button onClick={()=>getBook(id)}>Click me</button> */}
    </article>
}
// const Images= ({src})=>{return <img src={src}  />}
// const Title=()=>{return <h4>Best Seller List</h4>}
// const Author=()=>{return <h4>Author</h4>}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)