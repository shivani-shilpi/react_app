import { AppContext } from '../App';
import React, { useContext, useEffect } from 'react'

function LatestImage() {
    const { latestBook, setLatestBook } = useContext(AppContext);
    useEffect(() => {
        fetch("http://localhost:3000/api/v2/latest")
        .then((response) => response.json())
        .then((data) => {
            setLatestBook(data.image_url);
        })
        .catch((error) => console.error(error));
    }, [latestBook]);
  return (
    <div>
        <img src={latestBook} alt="latest book" className='latest-image' />
    </div>
  );
}

export default LatestImage