import React, { useState, createContext } from "react";
export const UserContext = createContext();


function UserContextProvider(props) {
  const [totalCase,setTotalCase] = useState("")
  const[totalActiveCase,setTotalActiveCase] = useState("");
  const[totalRecovered,setTotalRecovered] = useState("");
  const [totalDeath,setTotalDeath] = useState("");

  const [todayCase, setTodayCase] = useState("");
  const [todayActiveCase,setTodayActiveCase] = useState("");
  const[todayRecovered,setTodayRecovered] = useState("");
  const [todayDeath,setTodayDeath] = useState("");


  const [cities, setCities] = useState([]);
  var cityNames = [];
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  

  const SearchCovid = () => {
    // GET request using fetch with error handling
    fetch(
      "https://corona.lmao.ninja/v2/countries/".concat(
        country + "?yesterday=true"
      )
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setTodayCase(data.todayCases);
        setTodayActiveCase(data.active);
        setTodayDeath(data.todayDeaths);
        setTodayRecovered(data.todayRecovered);

        setTotalCase(data.cases);
        setTotalActiveCase(data.active);
        setTotalDeath(data.deaths);
        setTotalRecovered(data.recovered);
        
      })
      .catch((error) => {
        setError(error.toString());
        console.error("There was an error!", error);
      });
  };



  const handleChange = (e) => {
    setCountry(e.value);
  };

  const searchCity = () => {
    fetch(
      "https://hotels4.p.rapidapi.com/locations/search?query=".concat(country),
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "61a532192dmshe4a97d8c6f89d54p10fee6jsn704ac1d1b9ac",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        setCities(data.suggestions[0].entities);
        SearchCovid();
        setCurrentPage(1)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchHotel = () => {
    fetch(
      "https://hotels4.p.rapidapi.com/locations/search?query=".concat(city),
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "61a532192dmshe4a97d8c6f89d54p10fee6jsn704ac1d1b9ac",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
        },
      }
    )
      .then(async (response) => {
        const data = await response.json();
        setHotels(data.suggestions[1].entities);
        hotels.map((hotel, index) => {
          console.log(index, hotel.name);
        });
        searchWeather();
        setCurrentPage(2)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const searchWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=".concat(
        city + "&units=metric&appid=43b811164160ccdbae3ecc18fe414287"
      ),
      {
        method: "GET",
      }
    )
      .then(async (response) => {
        const data = await response.json();
        setWeather(data.main.temp);
        console.log(weather);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCity = (index) => {
    setCity(cities[index].name);
    console.log(city);
  };


  const value = {
    setCurrentPage,

      currentPage,
   
    todayCase,
    todayActiveCase,
    todayRecovered,
    todayDeath,
    totalCase,
    totalActiveCase,
    totalRecovered,
    totalDeath,

    setTodayCase,
    cities,
    setCities,
    city,
    setCity,
    hotels,
    setHotels,
    country,
    setCountry,
    cityNames,
    error,
    setError,
    weather,
    setWeather,
    SearchCovid,
    handleChange,
    searchCity,
    searchHotel,
    searchWeather,
    handleCity,

  };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;
