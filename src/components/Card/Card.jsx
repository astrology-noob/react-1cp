import React from "react";
import "./style.css";
import {RGBsign, HEXsign} from "../Signs";

export default (rgb_color, hex_color) => {
    return <div className="card">
        <RGBsign rgb_sign={rgb_color}/>
        <HEXsign hex_sign={hex_color}/>
    </div>
}