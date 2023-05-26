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
	user: string
}

interface Comment {
	content: string
}

interface CustomRouterQuery {
  data?: string;
}

export default function ListingPage() {
  const router = useRouter();
	const [comments, setComments] = useState<string[]>([])

  const { data }: CustomRouterQuery = router.query;
  const item : Item = data ? JSON.parse(decodeURIComponent(data)) : null;

	useEffect(() => {
		if(item){

			const fetchAPI = async () => {
				const res = await fetch(`http://localhost:3001/item/${item._id}/comments`)
				const resJSON = await res.json();
				setComments(resJSON)
			}
			fetchAPI()	
		}
	
	
		
	}, [item])
	
	if(!comments || !item) return "Loading Data"

  return (
		<div className="container">
			<div className="imgContainer">
				<Image 
					src="https://media.timeout.com/images/105813983/1920/1080/image.jpg"
      	  alt="Image Alt Text"
      	  width={600}
      	  height={300}/>
			</div>
			<h3 className="title">{item.title}</h3>
			<h4>{item.location}</h4>
			<div className="hostInfo">
				<h3>{item.user}</h3>
				<button>Message</button>
			</div>
			<div className="comments">
				{comments && comments?.map(comment => (
					<p>{comment.content}</p>
				))}
			</div>
		</div>
	)
}
