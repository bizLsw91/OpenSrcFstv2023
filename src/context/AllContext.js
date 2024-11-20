import React, { useState, createContext, useEffect } from 'react';
import moment from "moment";
import compareWithCurrentTime from "../Util/timeUtil";

export const AppContext = createContext();

const AllContext = ({ children }) => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const [stickyMenu, setStickyMenu] = useState(false);
   // sticky
   useEffect(() => {
      const stickyMenuBar = () => {
         if (window.scrollY > 80) {
            setStickyMenu(true)
         }
         else {
            setStickyMenu(false)
         }
      }
      window.addEventListener('scroll', stickyMenuBar);
   }, [])

   const isOverDeadLine = ()=>{
      return compareWithCurrentTime('>=','202411201114000')
   }


   const values = {
      isVideoOpen,
      setIsVideoOpen,
      stickyMenu,
      isOverDeadLine,
   }
   return (
      <>
         <AppContext.Provider value={values}>
            {children}
         </AppContext.Provider>
      </>
   );
};

export default AllContext;