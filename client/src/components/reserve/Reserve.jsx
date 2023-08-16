import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./reserve.css"
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch"
const Reserve=({setOpen,hotelId})=>{
    const [selectedRooms, setSelectedRooms] = useState([]);

    const {data,loading,error}=useFetch(`/hotels/rooms/${hotelId}`)
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
          checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)
        );
      };
    return(
        <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onclick={()=>{setOpen(false)}}/>
            <span>select your rooms:</span>
            {data.map((item)=>(
                <div className="rItem" key={item._id}>
                <div className="rItemInfo">
                <div className="rTitle">
                    {item.title}
                    </div>
                    <div className="rDesc">
                    {item.desc}
                </div>
                <div className="rMax">
                    Max People : <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">
                    {item.price}
                </div>
                 {
                    item.roomNumbers.map((roomNumber)=>(
                        <div className="room">
                        <label>{roomNumber.number}</label>
                        <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
                        </div>
                    )
                    )
                 }
                </div>
                </div>
            ))}
        </div>
        </div>
    )
}
export default Reserve