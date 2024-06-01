import { useState } from "react";

function Card({data}) {
    console.log(data , "data")
    const [id , setId]=useState('')
    console.log(id)
  return (
    <div
      style={{
        width: "150px",
        // height: "100px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        // padding: "16px",
        margin: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        backgroundColor:"#f6f6f6",
        // height:182
      }}
      onMouseEnter={()=>setId(data._id)}
      onMouseLeave={()=>setId("")}
    >
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a"
        }
        alt="Logo"
        style={{borderRadius:5}}
      />
      <div style={{backgroundColor:"#FFFFFF"}}>
      <p style={{fontWeight:'500' , fontSize:20 , backgroundColor:"#FFFFF"}}>{data.title}</p>
      <p style={{fontWeight:'500' , fontSize:10 , color:"grey" , textAlign:"center", }}>{data?.description.slice(0,25)}</p>
      <p style={{fontWeight:'600' , fontSize:20}}>$ {data.price}</p>
    { id ==data._id && <h1 style={{backgroundColor:"aqua"}}>Add to basket</h1>}
      </div>
    
    </div>
  );
}

export default Card;
