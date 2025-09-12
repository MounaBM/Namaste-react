import ItemList from './ItemList'

const RestaurantCategory = ({data ,showItems , setShowIndex}) =>{    
    const handleClick = ()=>{
        setShowIndex();
    }
  
    return (
        <div>
        <div className="w-6/12 bg-gray-200 m-auto p-4 my-2 rounded-lg">
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className="font-bold">{data?.title} ({data?.itemCards.length})</span><span>&darr;</span>
            </div>
            <div>{showItems && <ItemList items={data?.itemCards}/>}</div>
        </div>
        </div>

    )
}

export default RestaurantCategory;