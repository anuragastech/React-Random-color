import React, { useEffect, useState } from "react";
import "./style.css"

const RandomColor = () => {
    const [typeColor, setTypeColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const RandomColorUtility = (max) => {
        return Math.floor(Math.random() * max);
    };

    const handleCreateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomColorUtility(hex.length)];
        }
        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = RandomColorUtility(256);
        const g = RandomColorUtility(256);
        const b = RandomColorUtility(256);
        const rgbColor = `rgb(${r},${g},${b})`;
        setColor(rgbColor);
    };

    useEffect(() => {
        if (typeColor === "rgb") {
            handleCreateRandomRgbColor();
        } else {
            handleCreateRandomHexColor();
        }
    }, [typeColor]);

    return (
        <div 
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: color
            }} 
        >
            <div className="styled">
            <button className="button1" onClick={() => setTypeColor('hex')}>Create Hex Color</button>
                <button className="button1" onClick={() => setTypeColor("rgb")}>Create Rgb Color</button>
                <button className="button1" onClick={() => typeColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}>Create Random Color</button>
            </div>
            <div 
                style={{
                    padding: '50px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    marginTop: '200px',
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center'
                }}
            >
                <h1 style={{ margin: 0 }}>{typeColor === 'rgb' ? 'Rgb color' : 'Hex Color'}</h1>
                <h1 style={{ margin: 0 }}>{color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;
