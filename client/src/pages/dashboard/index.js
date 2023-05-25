import { useState } from "react"
import ListingCard from '../../components/listing-card/ListingCard.tsx'
import SearchBar from '../../components/search/SearchBar.tsx'

export default function Login() {
	
	

	return (
		<div className="mainContainer">
			<SearchBar />
			<ListingCard />
		</div>	
	)
}