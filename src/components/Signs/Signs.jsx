import React from "react";
import "./style.css";

const RGBsign = (rgb_sign) => {
    return <div className="RGBsign">
        <p>{rgb_sign}</p>
    </div>
}

const HEXsign = (hex_sign) => {
    return <div className="HEXsign">
        <p>{hex_sign}</p>
    </div>
}

export {RGBsign, HEXsign}