import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ListingCardProps {
  item: {
    _id: string,
    title: string,
    price: number,
  }
}

const ListingCard: React.FC<ListingCardProps> = ({ item }) => {

  const router = useRouter()

  const handleClick = () => {
    const serializedItem = encodeURIComponent(JSON.stringify(item))
    router.push({
      pathname: `/listing/${item._id}}`,
      query: {data: serializedItem}
    })
  }

  return (
    
    <div onClick={handleClick} className="bg-white rounded-lg shadow-md p-3">
      <div className="relative h-48 w-full mb-2">
        <Image
          src="https://media.timeout.com/images/105813983/1920/1080/image.jpg"
          alt="Image Alt Text"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p>Starting price at ${item.price}/hr</p>
      
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
        Read More
      </button> */}
    </div>
  );
};

export default ListingCard;
