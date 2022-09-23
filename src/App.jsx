import React from "react";
import Card from "./components/Card"

function GetColorRGB() {
    return [Math.random()*255, Math.random()*255, Math.random()*255];
}

function GetRGBString(rgb_colors) {
    return `rgb(${rgb_colors[0]}, ${rgb_colors[1]}, ${rgb_colors[2]})`
}

function RGBCompToHEX(comp) {
    var hex = comp.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function ConvertToHEX(rgb_colors) {
    return "#" + RGBCompToHEX(rgb_colors[0]) + RGBCompToHEX(rgb_colors[1]) + RGBCompToHEX(rgb_colors[2]);
}

let rgb_colors = GetColorRGB();


export default () => {
    return <>
        <div className="containter">
            <Card rgb_color={GetRGBString(rgb_colors)} hex_color={ConvertToHEX(rgb_colors)} />
        </div>
    </>
}

// const Caption = () => {
//     return <div>
//         <h1>Hiiii</h1>
//         <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, ratione.</h2>
//     </div>
// }

// const Card = () => {
//     let now = new Date().toLocaleDateString();
//     console.log(now);
//     return <div>{now}</div>
// }

// export {Caption, Card};