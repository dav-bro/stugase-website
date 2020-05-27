import React, { useState, useEffect } from "react";


const TimePickerClock60 = ({ setMinutes }) => {

    let initProps = [];

    const max = 60;

    for ( let i = 0; i <= 3; i++ ) {
        initProps.push(
            {
                textColor: "black",
                textBg: "transparent",
                textSize: "text-2xl"
            })
    }


    const [ properties, setProperties ] = useState(initProps);

    const [ texts, setTexts ] = useState([]);
    const [ circles, setCircles ] = useState([]);
    const [ hoverLine, setHoverLine ] = useState(null);


    let lines = [];
    let stuff = [];


    const radius = 200;


    //------------------------------------------------------------


    const clockWidth = 2;
    let center = radius + clockWidth;

    /*
            let x = Math.cos((part*2*Math.PI)/maxParts);
            let y = Math.sin((part*2*Math.PI)/maxParts);*/

    const getX = (factor) => (Math.cos(2*Math.PI*factor - Math.PI/2));
    const getY = (factor) => (Math.sin(2*Math.PI*factor - Math.PI/2));




    const getLine = (part, maxParts, length, strokeAttributes, inverted) => {

        let strokeWidth = (strokeAttributes && strokeAttributes.width) ? strokeAttributes.width : 2;
        let strokeColor = (strokeAttributes && strokeAttributes.color) ? strokeAttributes.color : "black";

        let x = getX(part/maxParts);
        let y = getY(part/maxParts);

        let calculatedLength = radius - radius * length;


        let coordinates = {
            x1: center + calculatedLength * x,
            y1: center + calculatedLength * y,
            x2: center + x * (inverted ? 0 : radius),
            y2: center + y * (inverted ? 0 : radius)
        };




        return             <line x1={coordinates.x1}  x2={coordinates.x2}
                                 y1={coordinates.y1}  y2={coordinates.y2}
                                 stroke={strokeColor}
                                 strokeWidth={strokeWidth} />
    };

    const handleHover = (ind) => {
        setHoverLine(getLine(ind, 4, 2.8/10, {width: 3, color: "green"}, true));

        setMinutes(ind * 15);

        let newProps = [...initProps];

        newProps[ind].textColor = "white";
        newProps[ind].textBg = "green";


        setProperties(newProps);
    };

    const handleClick = (ind) => {
        setMinutes(ind * 15)
    };


    const drawCircle = (part, maxParts, position, r, bgColor) => {


        let x = getX(part/maxParts);
        let y = getY(part/maxParts);

        let calculatedLength = radius - radius * position;


        return             <circle  cx={center + calculatedLength * x} cy={center + calculatedLength * y + 2}
                                    r={r} fill={bgColor} className="  cursor-pointer"
                                    onMouseOver={() => handleHover(part)} onClick={() => handleClick(part)}/>

    };

    const getText = (part, maxParts, position, text, textAttributes) => {

        let x = getX(part/maxParts);
        let y = getY(part/maxParts);


        let calculatedLength = radius - radius * position;


        return             <text x={center + calculatedLength * x} y={center + calculatedLength * y} alignmentBaseline={"center "}
                                 className={"transform translate-y-2 transition-all duration-300 cursor-pointer " + properties[part].textSize} fill={properties[part].textColor} textAnchor="middle"
                                 onClick={() => handleClick(part)}>{text}</text>
    };


    let hoverCircles = [];

    for (let i = 0; i <= 3; i++){
        hoverCircles.push(drawCircle(i, 4, 2/10, 40, "transparent"));
        lines.push(getLine(i, 4, 1/10));

    }

    stuff.push(<circle  cx={center} cy={center }
                        r={5} fill={"green"}/>);




    useEffect(() => {





        let texts = [];
        let circles = [];

        for (let i = 0; i <= 3; i++){

                texts.push(getText(i, 4, 2/10, i * 15));
                circles.push(drawCircle(i, 4, 2/10, 25, properties[i].textBg));

        }
        setTexts(texts);
        setCircles(circles);
    }, [properties]);


    useEffect(() => {

        handleHover(0);

    }, []);



    return(

        <div className="" style={{width: center*2, height: center*2}}>
                <svg width={2*center} height={2*center} >

                    <circle cx={center} cy={center} r={radius} stroke={"black"} fill={"transparent"} strokeWidth={clockWidth}/>

                    {lines}
                    {circles}
                    {hoverCircles}
                    {texts}
                    {hoverLine}
                    {stuff}


                    {/*<text x={center} y={center/ 1.7} alignmentBaseline={"center "}*/}
                    {/*className=" text-4xl cursor-pointer" fill={"black"} textAnchor="middle" >{hours}:{minutes}</text>*/}


                </svg>

        </div>
    )


};




export default TimePickerClock60;
