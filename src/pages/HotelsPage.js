import React, { useContext, useState,useMemo} from "react";
import { UserContext } from "../context/core";


export const HotelsPage = () => {
    const {
    
      
        hotels,
        city,
        weather
     
      } = useContext(UserContext);
    return (
        <div>  <div>
        {hotels.map((hotel, index) => (
          <span key={hotel.name}>
            <div>{hotel.name}</div>
          </span>
        ))}
      </div>
      <div>
        temp in {city}: {weather}
      </div>
            
        </div>
    )
}
