 import React, { lazy, Suspense, useEffect, useState } from 'react'
 import ReactDOM from 'react-dom/client'
 import Header from './components/Header';
 import Body from './components/Body'
 import About from './components/About';
 import Contact from './components/Contact';
 import Error from './components/Error';
 import RestaurantMenu from './components/RestarurantMenu';
 import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


 const Groceri = lazy(()=> import('./components/Groceri'))



 const AppComponent = () =>{
   const [userName , setUserName] = useState();
    useEffect(()=>{
   //Make API call here to get the user details

   const data = {
      name:'Mouna B M'
   }
   setUserName(data.name)
 })
   return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
      <div className='app'>
         <Header />
         <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
   )
 }

 const appRouter = createBrowserRouter([
   {
      path:'/', 
      element:<AppComponent/>,
      children:[
            {
               path:'/' , element:<Body />
            },
            {
               path:'/about' , element:<About/>
            },
            {
               path:'/contact' , element:<Contact/>
            },
            {
               path:'/grocery' , element:<Suspense fallback={<Shimmer/>}><Groceri/></Suspense>
            },
             {
               path:'/restarurants/:resId' , 
               element:<RestaurantMenu/>
            },
            {
               path:'/cart' , element:<Cart/>
            },
   ]
       , errorElement:<Error/>
   },

])

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter}/>)