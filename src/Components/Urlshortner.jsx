// import Axios from 'axios'
// import React, { useEffect } from 'react'
// import { Link, useNavigate } from "react-router-dom";

// const Urlshortner = () => {
//     const navigate = useNavigate()
  
//   return (
//     <div>
//         <h1>URL Shortener</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={originalUrl}
//             onChange={(e) => setOriginalUrl(e.target.value)}
//             placeholder="Enter URL" />
//           <button type="submit">Shorten</button>
//         </form>
//         {shortUrl && (
//           <div>
//             <h2>Short URL:</h2>
//  <p><Link to="{`http://localhost:3000/${shortUrl}`}">shortUrl</Link></p>
//           </div>
//         )}
//       </div>
//   )
// }

// export default Urlshortner

import React, { useState } from 'react';
import axios from 'axios';


const Urlshortner = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/shorten', { originalUrl });
    setShortUrl(response.data.shortUrl);
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter URL"
        />
        <button type="submit">Shorten</button>
      </form>
      
      {shortUrl && (
        <div>
          <h2>Short URL:</h2>
          <p>{`http://localhost:3000/${shortUrl}`}</p>
          
          <a href={`http://localhost:3000/${shortUrl}`}>Click the link</a>

        </div>
        
      )}
    </div>
  );
};

export default Urlshortner;
