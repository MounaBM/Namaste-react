import {CDN_URL} from '../utils/constants'

const RestroCards = (probs) =>{
   const {resData} = probs;
   const {cloudinaryImageId , name ,cuisines ,avgRating , costForTwo , sla} = resData?.info
   return (
      <div className='w-52 h-auto break-words p-2 m-2 bg-gray-200 rounded-lg hover:bg-slate-300'>
         <img className='w-46 flex rounded-lg' src={CDN_URL +
          cloudinaryImageId}/>
         <h3 className='font-bold'>{name}</h3>
         <h4>{cuisines.join(', ')}</h4>
         <h4>{avgRating} starts</h4>
         <h4>{costForTwo} </h4>
         <h4>{sla?.slaString}</h4>
      </div>
   );
 }

 export default RestroCards;