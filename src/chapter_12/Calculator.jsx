import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if(props.celcius >= 100){
        return <p>물이 끓습니다.</p>
    }
    return <p>물이 끓지 않습니다.</p>
}
function toCelcius(fahrenheight){
    return ((fahrenheight-32)*5)/9;
}
function toFahrenheight(celcius){
    return (celcius*9)/5 + 32;
}
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return ""
    };
    const output = convert(input);
    const rounded = Math.round(output*1000)/1000;
    return rounded.toString();
}
function Calculator(props){
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelciusChange = (temperature) =>{
        setTemperature(temperature);
        setScale("c");
    }
    const handleFahrenheightChange = (temperature) =>{
        setTemperature(temperature);
        setScale("f");
    }
    const celcius = scale == "f" ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheight = scale == "c" ? tryConvert(temperature, toFahrenheight) : temperature;

    return(
        <div>
            <TemperatureInput
                scale = "c"
                temperature = {celcius}
                onTemperatureChange =  {handleCelciusChange}
            />
            <TemperatureInput
                scale = "f"
                temperature = {fahrenheight}
                onTemperatureChange =  {handleFahrenheightChange}
            />
            <BoilingVerdict celcius = {parseFloat(celcius)}/>
        </div>
    )
}
export default Calculator;