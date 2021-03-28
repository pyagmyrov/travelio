import React, { useContext, useState, useMemo } from "react";
import { UserContext } from "../context/core";
import "../destinations.css"


export const DestinationsPage = () => {

  const { cities, handleCity, searchHotel,setCurrentPage } = useContext(UserContext);

  return (
    <div className="container">
    <div className="container-round">
      <div className="section-left">
        <div className="centered">
        </div>
        <a href="index.html"><div className="travelio"><span className="e1_923">Travelio.</span></div></a>
      </div>
      <h1 className="header">Destinations Found</h1>
      <section className="cards">
        <article className="card" >
          <p className="title">Titile here</p>
        </article>{/* /card-one */}
        <article className="card" >
          <p className="title">content for card two</p>
        </article>{/* /card-two */}
        <article className="card" >
          <p className="title"> content for card three</p>
        </article>{/* /card-three */}
        <article className="card">
          <p className="title">content for card four</p>
        </article>{/* /card-four */}
      </section>
      <section className="cards">
        <article className="card" >
          <p className="title">content for card one</p>
        </article>{/* /card-one */}
        <article className="card">
          <p className="title">content for card two</p>
        </article>{/* /card-two */}
        <article className="card" >
          <p className="title">content for card three</p>
        </article>{/* /card-three */}
        <article className="card" >
          <p className="title">content for card four</p>
        </article>{/* /card-four */}
      </section>
      <section className="arrows">
        <article className="arrow"> <img src="images/ArrowRight.svg" alt="" /> Next</article>{/* /card-one */}
        <article className="arrow"><img src="images/ArrowLeft.svg" alt="" />Previous
        </article>{/* /card-two */}
      </section>
    </div>
  </div>
    
  );
};

export default DestinationsPage;

//  <div>
//       {cities.map((city, index) => (
//         <span key={city.name}>
//           <div onClick={() => handleCity(index)}>{city.name}</div>
//         </span>
//       ))}
//       <button onClick={searchHotel}>SearchHotel</button>
//     </div> 
