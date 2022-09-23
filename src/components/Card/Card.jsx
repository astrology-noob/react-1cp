import React from "react";
import "./style.css";
import {RGBsign, HEXsign} from "../Signs/Signs";

function GetRGBString(rgb_colors) {
    return `rgb(${rgb_colors[0]}, ${rgb_colors[1]}, ${rgb_colors[2]})`
}

const Card = (props) => {
    return <div className="card" style={{backgroundColor: GetRGBString(props.rgb_color)}}>
        <div className="signs">
            <RGBsign rgb_color={GetRGBString(props.rgb_color)}/>
            <HEXsign rgb_color={props.rgb_color}/>
        </div>
    </div>
}

export {Card}