
import { useEffect, useState } from "react";
import ExploreCard from "./ExploreCard";


const Explore = () => {

    const [explore, setExplore] = useState();


    useEffect(()=>{
        fetch('explore.json')
        .then(res=>res.json())
        .then(data=>setExplore(data))
    },[])
    return (
        <div className=" py-20" >
            <h1 className=" text-3xl font-bold  ml-10">Explore Popular Categories</h1>
        <div className=" grid grid-cols-7 ">
            
        {
                explore?.map(item=><ExploreCard key={explore._id} item={item}></ExploreCard>)
            }
        </div>
            
        </div>
    );
};

export default Explore;