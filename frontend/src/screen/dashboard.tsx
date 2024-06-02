import { useState, useEffect, useContext } from "react";
import Card from "../components/card";

import { SearchTextInFo } from "../context/searchProvider";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const {SearchText , setSearchText } = useContext(SearchTextInFo)
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch('http://localhost:5500/eye');
      res = await res.json();
      console.log(res, "res");
      setData(res);
    };

    fetchData();
  }, [SearchText]);
console.log("SearchText" , SearchText)
  return (
    <div style={{ margin:"auto" }}>
     <div style={{display:"flex" , justifyContent:"center"}}>
     {data.filter((e)=>{
      
     
      if(SearchText){
        return e?.title?.includes(SearchText)
      }else{
        return e
      }
    
      
     }).map((e, index) => (
        <Card data={e} key={index} />
      ))}
     </div>
  
    </div>
  );
};

export default Dashboard;
