import { useEffect, useState } from "react";

const useJerseys = () => {
    const [jerseys, setJerseys] = useState([]);
    useEffect(()=>{
        fetch(`https://jersey-geeks-server.vercel.app/jerseys`)
        .then(res=>res.json())
        .then(data=>setJerseys(data))
    },[])
    return [jerseys];
};

export default useJerseys;