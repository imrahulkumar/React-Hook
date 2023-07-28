import { useEffect, useState} from 'react'

const Home = () => {

const [newRestaurant,setNewRestaurant] = useState({});
const [filterRestaurantList,setFilterRestaurantList] = useState([]);




  const getRestaurantList = async () => {
    try {
      console.log("hey")
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING",{
         method: 'GET',
        headers: {
          accept: 'application/json',
        },
      }
      );
      const json = await response.json();
      setNewRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
      setFilterRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       console.log('newRestaurant',newRestaurant);
       console.log('filterRestaurantList',filterRestaurantList);
    } catch (e) {
      console.log("error encountered" + e );
    }
  };

  useEffect(() => {
  getRestaurantList();
},[]);



const clickEvent = () => {
  console.log(filterRestaurantList);
}

  return (
    <div>
         
         {filterRestaurantList?.map(item => (<div key={item.info.id}>
          hello
          {item?.info?.name}
         </div>))}


         <button onClick={clickEvent}>Click Here</button>
       </div>
  )
}
export default Home;