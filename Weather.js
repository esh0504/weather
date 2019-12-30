import React from"react";
import{StyleSheet,View,Text,StatusBar} from "react-native";
import PropTypes from "prop-types";
import{MaterialCommunityIcons}from"@expo/vector-icons";
import{LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitles:"Just don't go outside."
    },
    Thunderstorm:{
        iconName:"weatehr-lightning",
        gradient:["#00ECBC","007ADF"],
        title:"Thunderstorm in the house",
        subtitles:"Actually, outside of the house"
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Dusty",
        subtitles:"Thanks a lot China"
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Misty",
        subtitles:"mist"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["D7D2CC","304352"],
        title:"Cloudy",
        subtitles:"cloud lot"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FEF253","#FF7300"],
        title:"Sunny",
        subtitles:"Go get your ass burnt"
    },
    Atmosphere:{
        iconName:"weatehr-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"Atmosphere",
        subtitles:"atmosphere"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"Cold as balls",
        subtitles:"Do you want to buld a snowman?"
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#20738a","#113e4a"],
        title:"Raining",
        subtitles:"For more info look outside"
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient:["89F7FE","66A6FF"],
        title:"Drizzle",
        subtitles:"Is like raing, but gay"
    }
};
export default function Weather({temp,condition})
{
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitles}>{weatherOptions[condition].subtitles}</Text>
            </View>
        </LinearGradient>);       
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds","Haze","Mist","Dust"])
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:
    {
        fontSize:42,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:
    {
        fontSize:44,
        fontWeight:"300",
        color:"white",
        marginBottom:10,
        alignItems:"center"
    },
    subtitles:
    {
        color:"white",
        alignItems:"center",
        fontWeight:"300",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:20 ,
        alignItems:"flex-start"
    }
});