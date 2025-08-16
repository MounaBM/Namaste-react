import { useEffect , useState} from "react";
import Shimmer from './Shimmer'
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const [resMenuList , setResMenuList] = useState(null)

    const {resId} =useParams()

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();
        
        setResMenuList(json.data)
    }

    if(resMenuList === null) return <Shimmer />;

    const {name , cuisines , costForTwoMessage} = resMenuList?.cards[2]?.card?.card?.info;

    const {itemCards} = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
        <div>Menu</div>
        <ul>
            {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
        </ul>
        </div>
    )
}

export default RestaurantMenu;