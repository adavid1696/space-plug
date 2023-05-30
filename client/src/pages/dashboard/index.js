import ListingCard from "../../components/listing-card/ListingCard";
import SearchBar from "../../components/search/SearchBar";


export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/item');
  const resJSON = await res.json()

  return {
    props: {
      data: resJSON
    }
  }
}

export default function Dashboard({ data }) {

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
