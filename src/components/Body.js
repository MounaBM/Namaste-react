import RestroCards from './RestaurantCard';
import { useState , useEffect} from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])

    const [searchText , setSearchText] = useState('')

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData()
    } , [])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        setListOfRestaurant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(onlineStatus === false) return <h1>Look like you're in offline!!. Please check you're Internet</h1>

   return listOfRestaurant.length === 0 ? <Shimmer/> : (
      <div className='body'>
      <div className='filter'>
        <input  type='text' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        }}/>
        <button onClick={()=>{
            let filterdataList = listOfRestaurant.filter(restro => 
                restro.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurant(filterdataList);
        }}>Serach</button>
        <button className='filter-btn' onClick={()=>{
        let filteredList = listOfRestaurant.filter(item=>item.avgRating >4);
            setListOfRestaurant(filteredList)
        }
        }>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {filteredRestaurant.map(restaurant => <Link key={restaurant?.info?.id} to={"/restarurants/"+restaurant?.info?.id}><RestroCards resData = {restaurant}/></Link>)}
      </div>
      </div>
   );
 }

 export default Body;