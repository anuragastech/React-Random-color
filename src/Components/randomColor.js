import React, { useState } from "react";

const RandomColor = () => {
    // const [typeColor, setTypeColor] = useState("hex");
    const [color] = useState("#000000");

    return (
        <div 
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: color
            }} 
        >
            <button onClick={()=>setTypeColor('hex')}>Create Hex Color</button>
            <button onClick={()=>setTypeColor("rgb")}>Create Rgb Color</button>
            <button  onClick={()=>typeofcolor === 'hex' ? handleCreateRandomHexColor}>Create Random Color</button>
        </div>
    );
};

export default RandomColor;
