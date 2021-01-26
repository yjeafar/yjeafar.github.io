import React from 'react';
import ocean from '../images/ocean.jpg';
import '../css/welcome.css';
import ExternalLinkIcons from './external-link-icons';

export default function Welcome({forwardedRef}) {
  return (
    <div ref={forwardedRef}>
      <img src={ocean} alt='ocean painting' id='welcomeImg'></img>
        <div className='welcomeBlock'>
          <div>Yasser Jeafar</div>
          <hr className="welcomeLine" />
          <p>Online Portfolio</p>
        </div>
        <div id="externalLinks">
            <ExternalLinkIcons/>
        </div>
        <span id="imageSource">Photo by <a href="https://unsplash.com/@somanydetails?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luigi Manga</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> 
    </div>
  );
}