import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { GetServerSidePropsContext } from 'next';
import ImageCarousel from "@component/components/image-carousel/ImageCarousel";
import Booking from "@component/components/booking/Booking";

interface Item {
  _id: string;
  title: string;
  type: string;
  location: string;
  rules: string;
  price: number;
  startTime: string;
  endTime: string;
  user: User;
}

interface User {
  firstName: string,
  lastName: string
}

interface Comment {
  content: string,
  _id: string,
  user: User
}

interface CustomRouterQuery {
  data?: string;
}

interface ListingStageProps {
  comments: Comment[]
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  const res = await fetch(`http://localhost:3001/item/${query.id}/comments`);
  const comments: Comment[] = await res.json();
  return {
    props: {
      comments,
    },
  };

}

export default function ListingPage({ comments }: ListingStageProps ) {
  const router = useRouter();


  const { data }: CustomRouterQuery = router.query;
  const item: Item | null = data ? JSON.parse(decodeURIComponent(data)) : null;

  if (!item) return <div>Loading item data...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <ImageCarousel />

      <h3 className="text-3xl font-bold mt-4">{item.title}</h3>
      <h4 className="text-lg text-gray-500 mb-4">{item.location}</h4>
      <div className="hostInfo flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold">{item.user.firstName} {item.user.lastName}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Message</button>
      </div>
      <p>{item.rules}</p>

      <div className="comments">
        {comments.map((comment) => (
          <div key={comment._id} className="bg-gray-100 p-4 rounded-md mb-4">
            <h1 className="text-lg font-semibold">{comment.user.firstName} {comment.user.lastName}</h1>
            <p className="mb-2">{comment.content}</p>
          </div>
        ))}
      </div>

      <div className="bookingContainer">
        <Booking item={item} />
      </div>
    </div>
  );
}
