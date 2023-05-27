import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Item {
  _id: string;
  title: string;
  type: string;
  location: string;
  rules: string;
  price: number;
  startTime: string;
  endTime: string;
  user: string;
}

interface Comment {
  content: string,
  _id: string,
  user: string
}

interface CustomRouterQuery {
  data?: string;
}

export default function ListingPage() {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);

  const { data }: CustomRouterQuery = router.query;
  const item: Item | null = data ? JSON.parse(decodeURIComponent(data)) : null;

  useEffect(() => {
    if (item) {
      const fetchAPI = async () => {
        const res = await fetch(`http://localhost:3001/item/${item._id}/comments`);
        const resJSON = await res.json();
        setComments(resJSON);
      };
      fetchAPI();
    }
  }, [item]);

  if (!comments || !item) return "Loading Data";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="imgContainer">
        <Image src="https://media.timeout.com/images/105813983/1920/1080/image.jpg" alt="Image Alt Text" width={600} height={300} />
      </div>
      <h3 className="text-3xl font-bold mt-4">{item.title}</h3>
      <h4 className="text-lg text-gray-500 mb-4">{item.location}</h4>
      <div className="hostInfo flex items-center justify-between mb-4">
        <h3 className="text-xl">{item.user}</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Message</button>
      </div>
      <div className="comments">
        {comments.map((comment) => (
					<>
						{comment.user}
          	<p key={comment._id} className="mb-2">{comment.content}</p>
					</>
        ))}
      </div>
    </div>
  );
}
