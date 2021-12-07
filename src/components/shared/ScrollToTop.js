import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export default function Wrapper({children}){
 const location = useLocation();
 useLayoutEffect(() => {
   document.documentElement.scrollTo(0, 0);
 }, [location.pathname]);
 return children
} 
