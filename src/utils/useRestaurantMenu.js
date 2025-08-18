import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurentMenu =(resId) =>{

    const [resMenuList , setResMenuList] = useState(null)
    
    useEffect(()=>{
        fetchResMenu();
    },[])

    const fetchResMenu = async ()=>{
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        setResMenuList(json.data)
    }

    return resMenuList;
}

export default useRestaurentMenu;