import RestroCards from './RestaurantCard';
import resList from '../utils/mockData';
import { useState} from 'react';

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
   return (
      <div className='body'>
      <div className='filter'>
        <button className='filter-btn' onClick={()=>{
        let filteredList = listOfRestaurant.filter(item=>item.data.avgRating >4);
            setListOfRestaurant(filteredList)
        }
        }>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {listOfRestaurant.map(restaurant => <RestroCards key={restaurant.data.id} resData = {restaurant}/>)}
      </div>
      </div>
   );
 }

 export default Body;