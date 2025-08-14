import {CDN_URL} from '../utils/constants'

const RestroCards = (probs) =>{
   const {resData} = probs;
   const {cloudinaryImageId , name ,cuisines ,avgRating , costForTwo , deliveryTime} = resData
   return (
      <div className='res-card' style={{backgroundColor : "#f0f0f0"}}>
         <img className='res-logo' src={CDN_URL +
          cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4>{cuisines.join(', ')}</h4>
         <h4>{avgRating} starts</h4>
         <h4>{costForTwo} </h4>
         <h4>{deliveryTime} minutes</h4>
      </div>
   );
 }

 export default RestroCards;