interface ListingCardProps {
  item: {
    _id: string,
    title: string,
    price: number,
  }
}

const Booking: React.FC<ListingCardProps> = ({ item }) => {
	return (
  <div className="bg-white rounded-lg shadow-md p-4">
    <div className="text-2xl font-bold mb-4">${item.price}</div>

    <div className="mb-4">
      <label className="text-lg font-semibold" htmlFor="date">Date</label>
      <select className="form-select">
        <option value=""></option>
      </select>
    </div>
    <div className="flex mb-4">
      <div className="w-1/2 mr-2">
        <label className="text-lg font-semibold" htmlFor="startTime">Start Time</label>
        <select className="form-select">
          <option value=""></option>
        </select>
      </div>
      <div className="w-1/2 ml-2">
        <label className="text-lg font-semibold" htmlFor="endTime">End Time</label>
        <select className="form-select">
          <option value=""></option>
        </select>
      </div>
    </div>

    <div className="text-lg font-semibold mb-4">Total: ${item.price * 2}</div>
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      Request To Book
    </button>
  </div>
);

}

export default Booking