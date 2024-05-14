'use client'
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import Logo from './Logo';


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
    }
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fetch delay
    setTimeout(() => {
        setLoading(false);
    }, 2000);  // Loading screen will show for 3 seconds
}, []);

if (loading) {
    return <Logo />;
}

  return (
    <div className="mx-5 mt-4  p-5 shadow-xl rounded-2xl">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className=' flex flex-col justify-center items-center '>
            <img className="max-h-[400px]  rounded-2xl " src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Slideshow;



