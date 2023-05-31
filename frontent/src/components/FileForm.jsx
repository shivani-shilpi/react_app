import { AppContext } from "../App";
import React, { useContext } from "react";

function FileForm(){
    const { setLatestBook } = useContext(AppContext);

    function handleSubmit(event){
         event.preventDefault();
         const data = new FormData();
         
         data.append("book[name]", event.target.name.value);
         data.append("book[image]", event.target.image.files[0]);
         submitToAPI(data);
    }

    function submitToAPI(data){
        fetch("http://localhost:3000/api/v2/books/create",{
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(data => {
            setLatestBook(data.image_url);
        })
        .catch((error) => console.error(error));
    }
    return (
    <div className='form-field'>
        <h1>FileForm</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <br/>

            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" />
            <br/>

            <button typeof="submit">Create Book</button>
        </form>
        
    </div>
    )
}

export default FileForm;