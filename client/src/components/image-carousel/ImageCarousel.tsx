import { useState } from 'react'
import Image from 'next/image';

function ImageCarousel() {
	const [currentImg, setCurrentImg] = useState(0)

	 const imgs: string[] = [
    'https://www.therooftopguide.com/rooftop-bars-in-new-york/Bilder/dear-irving-on-hudson-600-1.jpg',
    'https://www.therooftopguide.com/rooftop-bars-in-new-york/Bilder/dear-irving-on-hudson-600-2.jpg',
    'https://www.therooftopguide.com/rooftop-bars-in-new-york/Bilder/dear-irving-on-hudson-600-3.jpg',
    'https://www.therooftopguide.com/rooftop-bars-in-new-york/Bilder/dear-irving-on-hudson-600-4.jpg',
    'https://www.therooftopguide.com/rooftop-bars-in-new-york/Bilder/dear-irving-on-hudson-600-5.jpg',
    'https://www.therooftopguide.com/rooftop-bars-in-new-york/Bilder/dear-irving-on-hudson-600-6.jpg',
  ]

  const handleNext = (e: any) => {
    e.preventDefault();
    
    if(!imgs[currentImg + 1]){
      setCurrentImg(0)
    }else setCurrentImg(prev => prev + 1)
  }

  const hanldePrev = (e: any) => {
    e.preventDefault();

    if(!imgs[currentImg - 1]){
      setCurrentImg(imgs.length - 1)
    }else setCurrentImg(prev => prev - 1)
  }

	return (
		<div className="relative">
        <div className="imgContainer flex justify-center ">
          <Image 
            src={imgs[currentImg]} 
            alt="Image Alt Text" 
            width={600} 
            height={300}
            className="rounded"
          />
          <button 
            className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            onClick={hanldePrev}
          >
            Prev
          </button>
          <button 
            className="absolute top-1/2 right-1/4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
	)
}

export default ImageCarousel