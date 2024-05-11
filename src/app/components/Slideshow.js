'use client'
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'





function Slideshow() {


const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
}

const fadeImages = [
    {
      url: '/IMG_5349 2.PNG',
      caption: 'First Slide'
    },
    {
      url: '/IMG_5350 2.PNG',
      caption: 'Second Slide'
    },
    {
      url: '/IMG_5351 2.PNG',
      caption: 'Third Slide'
    },
    {
      url: '/IMG_5352 2.PNG',
      caption: 'Third Slide'
    },,
    {
      url: '/IMG_5353 2.PNG',
      caption: 'Third Slide'
    },
    {
      url: '/IMG_53514 2.PNG',
      caption: 'Third Slide'
    },
  ];

  return (
    <div className="mx-5 mt-4 p-5 shadow-xl rounded-2xl">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className="h-[400px] w-full rounded-2xl " src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slideshow;



