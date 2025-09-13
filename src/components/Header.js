import { useState , useEffect, useContext} from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext  from '../utils/UserContext'
import { useSelector } from 'react-redux';

const Header = () =>{
   const [btnName , setBtnName] = useState('Login');

   const onlineStatus = useOnlineStatus();

   const  {loggedInUser} = useContext(UserContext);

   const cartItems = useSelector(store => store.cart.items)

   return (
      <div className='flex justify-between bg-pink-200 shadow-md border border-s-violet-500'>
         <div className='logo-container'>
         <img className="w-28 shadow-md" src={LOGO_URL} />
         </div>
         <div className='flex justify-center justify-items-center mr-8'>
            <ul className='flex'>
               <li className='px-3 flex items-center'>Online Status : {onlineStatus ? "💕" : "🤦‍♀️"} </li>
               <li className='px-3 flex items-center'><Link to="/">Home</Link></li>
               <li className='px-3 flex items-center'><Link to="/about">About Us</Link></li>
               <li className='px-3 flex items-center'><Link to="/contact">Contact Us</Link></li>
               <li className='px-3 flex items-center'><Link to="/grocery">Grocery</Link></li>
               <li className='px-3 flex items-center font-bold text-xl'>
                  <Link to="/cart">Cart- ({cartItems.length} items)</Link>
                  </li>
               <button className='loginBtn' onClick={()=>{
                    btnName === "Login" ? setBtnName('Logout') : setBtnName('Login');
               }}>{btnName}</button>
               <li className='px-3 flex items-center font-bold'>{loggedInUser}</li>
            </ul>
         </div>
      </div>
   );
 }

 export default Header;