import { useState } from "react";
import ListingCard from "../../components/listing-card/ListingCard";
import SearchBar from "../../components/search/SearchBar";

export default function Dashboard() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="container mx-auto py-8">
			<div class="mb-6">
      <SearchBar />
			</div>
      <div className="flex flex-wrap justify-center -mx-4">
        {data.map((item) => (
          <div key={item} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
            <ListingCard />
          </div>
        ))}
      </div>
    </div>
  );
}
