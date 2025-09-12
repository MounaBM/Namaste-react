import Shimmer from './Shimmer'
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from './RestaurantCategory'
import {useState} from 'react'

const RestaurantMenu = ()=>{
    const {resId} =useParams();

    const resMenuList = useRestaurentMenu(resId)

    const [showIndex, setShowIndex] = useState(0);

    if(resMenuList === null) return <Shimmer />;


    const {name , cuisines , costForTwoMessage} = resMenuList?.cards[2]?.card?.card?.info;


    const {itemCards} = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const catagoryList = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(data=>
        data?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
    return (
        <div className="text-center my-3">
        <h1 className='font-bold text-2xl'>{name}</h1>
        <h3 className='font-bold text-gray-600'>{cuisines.join(', ')} - {costForTwoMessage}</h3>
        <div>{catagoryList.map((item ,index)=>
             <RestaurantCategory key={item?.card?.card?.title} data={item?.card?.card}
             showItems={index === showIndex ? true : false}
             setShowIndex={()=>setShowIndex(index)}/>
        )}</div>
        </div>
    )
}

export default RestaurantMenu;