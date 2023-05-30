import { useRef, useState } from "react";

export default function Host() {

  const title = useRef()
  const type = useRef()
  const location = useRef()
  const rules = useRef()
  const price = useRef()
 
  
  const handleClick = async (e: any) => {
    console.log('type: ', type.current.value)
    e.preventDefault();

    

    try {
      const res = await fetch(`http://localhost:3001/item/646e08a6321b5b9f270d013f`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title.current?.value,
        type: type.current?.value,
        location: location.current?.value,
        rules: rules.current?.value,
        price: parseFloat(price.current?.value)
      })
    })

    const resJSON = await res.json();
    console.log(resJSON)
    } catch (e) {
        console.error(e)
    }

  }

  return (
    <div onSubmit={handleClick} className="flex items-center justify-center h-screen">
      <form className="w-96 p-8 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="spaceType">
            Type of space
          </label>
          <select
           name="spaceType" 
           className="form-select"
           ref={type}
           required>
            <option value="Rooftop">Rooftop</option>
            <option value="Movie Room">Movie Room</option>
            <option value="Pool">Pool</option>
            <option value="Billards">Billards</option>
            <option value="Lounge">Lounge</option>
            <option value="Backyard">Backyard</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input ref={title} type="text" className="form-input" required/>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="location" >
            Location
          </label>
          <input type="text" className="form-input"  ref={location} required/>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="rules" >
            Rules
          </label>
          <input type="text" className="form-input"  ref={rules} required/>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="price" required >
            Price
          </label>
          <div className="flex">
            <span className="text-gray-500">$</span>
            <input type="text" className="form-input pl-2" ref={price} required/>
          </div>
        </div>

        <input 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" 
          type="submit"/>
      </form>
    </div>
  );
}
