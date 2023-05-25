import React from 'react';
import Image from 'next/image';

const DetailsCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative h-48 w-full mb-4">
        <Image
          src="/path/to/image.jpg"
          alt="Image Alt Text"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">Card Title</h3>
      <p className="text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies
        massa non arcu tristique, vel tincidunt neque consectetur. Vivamus
        fringilla tortor id lectus iaculis feugiat.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
        Read More
      </button>
    </div>
  );
};

export default DetailsCard;
