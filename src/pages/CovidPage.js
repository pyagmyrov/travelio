import React, { useContext, useState, useMemo } from "react";
import { UserContext } from "../context/core";

export const CovidPage = () => {
  const { todayCase,
    todayActiveCase,
    todayRecovered,
    todayDeath,
    totalCase,
    totalActiveCase,
    totalRecovered,
    totalDeath,  } = useContext(UserContext);

  return (

    <div>
    <div>
        <div className="container">
          <div className="container-round">
            <div className="section-right">
            </div>
            <div className="section-left" />
          </div>
          <div className="e14_1031">
            <div className="e1_994">
              <div className="e1_834"><span className="e1_835">Search destination</span>
                <input className="search" type="text" name id />
                <button type="button" className="search-icon"><img src="images/search.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="e1_988">
              <div className="ei1_988_3_88">
                <div className="ei1_988_3_89" />
                <div className="ei1_988_3_90" />
              </div>
            </div>
          </div>
          <div className="e14_1034">
            <a href="flights.html">
              <div className="e14_1032"><span className="e1_1033">Flights</span>
                <div className="e1_998">
                  <div className="ei1_998_3_130">
                    <img src="images/fly.svg" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a href="covid.html" className="covid-icon">
              <div className="e14_1024"><span className="e1_1032">Covid</span>
                <div className="e1_1010">
                  <div className="ei1_1010_3_216">
                    <img src="images/covid.svg" alt="" />
                    <div className="ei1_1010_3_217" />
                    <div className="ei1_1010_3_218" />
                    <div className="ei1_1010_3_219" />
                    <div className="ei1_1010_3_220" />
                  </div>
                </div>
              </div>
            </a>
            <a href="saved.html">
              <div className="e14_1023"><span className="e1_1034">Saved</span>
                <div className="e1_1016">
                  <div className="ei1_1016_3_288">
                    <img src="images/heart.svg" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a href="faq.html">
              <div className="faq-section"><span className="faq">FAQ</span>
                <img src="images/faq.svg" alt="" />
              </div>
            </a>
            <div className="discover-area"><span className="e1_1030">Discover</span>
              <a href="index.html" className="discover-icon"> <img src="images/discovery.svg" alt="" /></a>
            </div>
          </div>
          <a href="settings.html">
            <span className="settings">Settings</span>
            <div className="e1_1025">
              <div className="settings-icon">
                <img src="images/settings.svg" alt="" />
              </div>
            </div>
          </a>
        </div>
        <div className="e14_1030"><span className="e6_606">Search over 1000+ destionations and get travel information</span>
          <div className="e6_609" />
        </div>
        <a href="index.html"><div className="travelio"><span className="e1_923">Travelio.</span></div></a>
      </div>
      

    </div>
  );
};

export default CovidPage;
