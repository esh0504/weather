import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert, TextComponent } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY="d80df6a1dffec7eb6928cbd06336b934";
export default class extends React.Component{
  state={
    isLoading: true
  };
  
  getWeather=async(latitude,longitude)=>{
    const
    { data:{main:{temp},weather }}
    =await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      condition:weather[0].main,
      temp
    });
  };
  getLocation=async()=>{
    try{
      await Location.requestPermissionsAsync();
      const{coords:{latitude,longitude}}=await Location.getCurrentPositionAsync();
      this.getWeather(37.5509,126.941);
      console.log(37.5509,126.941);
    }catch(error){
      Alert.alert("Can't find you.","So sad");
    }
  }
  componentDidMount()
  {
    this.getLocation();
  }
  render()
  {
    const{isLoading,condition,temp}=this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} />
  }
};