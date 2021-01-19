import React from 'react';
import ocean from '../images/ocean.jpg';
import '../css/welcome.css';

export default function Welcome({forwardedRef}) {
  return (
    <div ref={forwardedRef}>
      <img src={ocean} alt='ocean painting' id='welcomeImg'></img>
        {/* <span>Photo by <a href="https://unsplash.com/@somanydetails?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luigi Manga</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
        <div className='welcomeBlock'>
          <h3>Hi</h3>
          <p>Something</p>
        </div>
    </div>
  );
}