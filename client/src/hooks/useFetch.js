 import { useState,useEffect } from "react"
 import axios from "axios"
 const useFetch=(url)=>{
    console.log(url)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    // const url="/hotels/countbycity?cities=madrid,berlin,london"
    
    useEffect(() => {
        const fetchData=async()=>{
            setLoading(true)
            try{
                const res=await axios.get(url);
                setData(res.data)
            }
            catch(err){
                setError(err);
            }
            setLoading(false)
        }
        fetchData()
    }, [url]);
    
    const reFetch=async()=>{
        setLoading(true)
        try{
            const res=await axios.get(url);
            setData(res.data)    }
        catch(err){
            setError(err);
        }
        setLoading(false)
    }

    return {data,loading,error,reFetch}
 }
 
 export default useFetch;
 