import { useContext } from 'react';
import {CDN_URL} from '../utils/constants';
import UserContext from '../utils/UserContext'

const RestroCards = (probs) =>{
   const {resData} = probs;
   const  {loggedInUser} = useContext(UserContext);
   const {cloudinaryImageId , name ,cuisines ,avgRating , costForTwo , sla} = resData?.info;
   
   return (
      <div className='w-52 h-auto break-words p-2 m-2 bg-gray-200 rounded-lg hover:bg-slate-300'>
         <img className='w-46 flex rounded-lg' src={CDN_URL +
          cloudinaryImageId}/>
         <h3 className='font-bold'>{name}</h3>
         <h4>{cuisines.join(', ')}</h4>
         <h4>{avgRating} starts</h4>
         <h4>{costForTwo} </h4>
         <h4>{sla?.slaString}</h4>
         <h4>User : {loggedInUser}</h4>
      </div>
   );
 }

export const withPromotedLabel = (RestroCards)=>{
   return (props)=>{
   return(
      <div>
         <label className='absolute bg-black text-white p-1 rounded-lg ml-3'>Promoted</label>
         <RestroCards {...props}/>
      </div>

   )
   }

 }

 export default RestroCards;