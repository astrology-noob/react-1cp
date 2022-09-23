import React from "react";
import "./style.css";

function RGBCompToHEX(comp) {
    var hex = comp.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function RGBToHEX(rgb_colors) {
    return "#" + RGBCompToHEX(rgb_colors[0]) + RGBCompToHEX(rgb_colors[1]) + RGBCompToHEX(rgb_colors[2]);
}

const RGBsign = (props) => {
    return <div className="RGBsign">
        <p>{props.rgb_color}</p>
    </div>
}

const HEXsign = (props) => {
    return <div className="HEXsign">
        <p>{RGBToHEX(props.rgb_color)}</p>
    </div>
}

export {RGBsign, HEXsign}