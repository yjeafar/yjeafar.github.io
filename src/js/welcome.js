import React from 'react';
import ocean from '../images/ocean.jpg';
import '../css/welcome.css';

export default function Welcome({forwardedRef}) {
  return (
    <div ref={forwardedRef}>
      <img src={ocean} alt='Milky Way Galaxy' id='welcomeImg'></img>
        {/* <div style={{width:'50%', marginLeft:'auto', marginRight: 'auto'}}>Photo by <a href="https://unsplash.com/@marekpiwnicki?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Marek Piwnicki</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></div> */}
        {/* <span>Photo by <a href="https://unsplash.com/@somanydetails?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luigi Manga</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
    </div>
  );
}