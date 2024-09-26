import React from "react";
import residential from "../residentials";
const Home = () => {
 return (
    <div>
       {residential.map(res => {
            console.log(res)
       })}
    </div>
 )
}
export default Home;