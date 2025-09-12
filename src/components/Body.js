import RestroCards ,{withPromotedLabel} from './RestaurantCard';
import { useState , useEffect, useContext} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext';

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText , setSearchText] = useState('')

    const onlineStatus = useOnlineStatus();

    const PromotedRestoCards = withPromotedLabel(RestroCards);

    useEffect(()=>{
        fetchData()
    } , [])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        setListOfRestaurant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(onlineStatus === false) return <h1>Look like you're in offline!!. Please check you're Internet</h1>

     const {loggedInUser , setUserName} = useContext(UserContext)

   return listOfRestaurant.length === 0 ? <Shimmer/> : (
      <div className='body'>
      <div className='my-4'>
        <input className='border border-solid border-black rounded-md m-4'  type='text' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
        <button className='bg-blue-500 px-2 py-1 rounded-md mr-2 text-white' onClick={()=>{
            let filterdataList = listOfRestaurant.filter(restro => 
                restro.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filterdataList);
        }}>Serach</button>
        <button className='bg-gray-500 rounded-md px-2 py-1 text-white' onClick={()=>{
        let filteredList = listOfRestaurant.filter(item=>item.avgRating >4);
            setListOfRestaurant(filteredList)
        }
        }>Top Rated Restaurants</button>
        <label>Username :</label>
        <input className='border border-solid border-black rounded-md m-4 p-1' value={loggedInUser}
         onChange={(e)=>setUserName(e.target.value)} />
       
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurant.map(restaurant => <Link key={restaurant?.info?.id} to={"/restarurants/"+restaurant?.info?.id}>
        {restaurant?.info?.veg ? <PromotedRestoCards resData = {restaurant}/>: <RestroCards resData = {restaurant}/>}
        </Link>)}
      </div>
      </div>
   );
 }

 export default Body;