import { useEffect, useState } from "react";

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000");

    function handleCreateRandomHEXColor() {
        const hexValues = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hexValues[Math.floor(Math.random() * 16)];
        }
        setColor(color);
    }

    function handleCreateRandomRGBColor() {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        setColor(randomColor);
    }

    useEffect(() => {
        if (typeOfColor === "hex") handleCreateRandomHEXColor();
        else handleCreateRandomRGBColor();
    }, [typeOfColor]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: color,
            }}
        >
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button
                onClick={
                    typeOfColor === "hex"
                        ? handleCreateRandomHEXColor
                        : handleCreateRandomRGBColor
                }
            >
                Generate Random Color
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    color: "#fff",
                    fontSize: "60px",
                    marginTop: "50px",
                    flexDirection: "column",
                    gap: "50px"
                }}
            >
                <h3>Random {typeOfColor.toUpperCase()} Color</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}

export default RandomColor;
