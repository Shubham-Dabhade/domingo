import { useEffect, useState } from "react";
import "./css/Element.scss";
import Hotels from "./hotels";
import Card1 from "./Card1";
import Food from "./food.js";
import background from "./images/blob-scene-haikei.svg";

const Element=(props)=>{
    const [name,setName]=useState(props.name);
    const [options,setOptions]=useState("veg");
    
    const [hotel,setHotel]=useState([]);
    const [nonVegImages,setNonVegImages]=useState([Food[0].nonVegImages]);
    const [vegImages,setVegImages]=useState([Food[1].vegImages]);
    const [nonVegNames,setNonVegNames]=useState([Food[0].nonVegNames]);
    const [vegNames,setVegNames]=useState([Food[1].vegNames]);

    var backgroundImage="./images/Untitled design.jpg";
    useEffect(
        function hotelFound(){
            document.body.style.backgroundImage=`url(${background})`;
            document.body.style.backgroundRepeat="no-repeat";
            document.body.style.backgroundPosition="center";
            document.body.style.backgroundSize="cover";
            Hotels.map((hotel)=>{
                if(hotel.hotel===props.name){
                    setHotel(hotel);
                    return <img src={hotel.photo} className="logo" alt=""/>;
                    
                }
                else{
                    return "";
                }
            });
        },[]
    );
    function hotelFound(hotel){
        if(hotel.hotel===props.name){
            return <img src={hotel.photo} className="logo" alt=""/>;
        }
        else{
            return "";
        }
    }
    
    function hotelFoundAdd(hotel){
        if(hotel.hotel===props.name){
            return  hotel.address;
        }
        else{
            return "";
        }
    }
    
    function getFood(options){
    }

    function handleClick(event){
        if(event.target.value==="veg"){
            setOptions("veg");
        }
        else if(event.target.value==="nonveg"){
            setOptions("nonveg");
        }
    }


    return(
        <>
            <div className="Element grid">
                <div className="Profile g-col-3">
                    <div className="contained">
                    
                    <div className="logo1">
                    {Hotels.map((hotel)=>{
                        return hotelFound(hotel);
                    })}
                    <div className="name">
                        {name}
                    </div>
                    4.5

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    </div>
                    <div className="address">
                    <div>
                    <img src={require("./images/location.png")} alt=""/>
                        <div className="actual">
                        {Hotels.map((hotel)=>{
                            return hotelFoundAdd(hotel);
                        })}
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="form g-col-9">
                    <div className="menu">
                        <div className="menu1">Menu</div>
                        <div className="someForm">                      
                                <button type="checkbox" id="Veg" onClick={handleClick} name="food_pretext" value="veg">Veg</button>
                                <button type="checkbox" id="nonVeg" onClick={handleClick} name="food_pretext" value="nonveg">Non-Veg</button>
                        </div>
                        <div className="center">
                            <div className="dataStore" >
                                    {options==="veg"?vegImages[0].map((image,index)=>{
                                        return(<Card1 images={image} name={vegNames[0][index]} key={index}/>);
                                    }):nonVegImages[0].map((image,index)=>{
                                        return(<Card1 images={image} name={nonVegNames[0][index]} key={index}/>);
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Element;