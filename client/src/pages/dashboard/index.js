import { useState, useEffect } from "react";
import ListingCard from "../../components/listing-card/ListingCard";
import SearchBar from "../../components/search/SearchBar";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch('http://localhost:3001/item');
      const resJSON = await res.json();

      setData(resJSON)
    }

    fetchAPI()

  }, [])
  
  if(!data) return 'Loading Data'

  return (
    
    <div className="container mx-auto py-8">
			<div className="mb-6">
      	<SearchBar />
			</div>
      <div className="flex flex-wrap justify-center -mx-4">
        {data.map((item) => (
          <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
            <ListingCard item={item}/>
          </div>
        ))}
      </div>
    </div>
  );
}
