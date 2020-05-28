import React, { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";


const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];


const DatePicker = ({ setDatePicker, setDate }) => {

    // const [ day, setDay ] = useState(1);

    // const [ expanded, setExpanded ] = useState(false);

    const [ month, setMonth ] = useState(1);

    const [ year, setYear ] = useState(2000);

    const [ currentDay, setCurrentDay ] = useState(1);

    const [ currentMonth, setCurrentMonth ] = useState(1);

    const [ currentYear, setCurrentYear ] = useState(2000);



    useEffect(() => {
        const date = new Date();

        setCurrentDay(date.getDate());
        setCurrentMonth(date.getMonth() + 1);
        setCurrentYear(date.getFullYear());


        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear());

        // setExpanded(true);

    }, []);


    let y = parseInt((((month) < 3 ? year - 1 : year) + "").substr(2, 4));
    let c = parseInt((((month) < 3 ? year - 1 : year) + "").substr(0, 2));


    const gauss = (number) => {
        return Math.floor(number);
    };

    function getMonth(x) {
        if (x < 3) {
            x += 10;
        } else {
            x -= 2;
        }
        return x;
    }


    let dayOne = (1 + gauss(2.6 * getMonth(month) - 0.2) + y + gauss(y/4) + gauss(c/4) - 2 * c) % 7;

    if (dayOne < 0){

        dayOne += 7;
    } else if (dayOne === 0){
        dayOne = 7;
    }

    console.log(dayOne);

    let days = [[]];

    for (let i = 0; i < 32; i++) {
        if (i < 7) {
            days[0].push(i);
        }
        else if (i < 7) {
            days[1].push(i);
        }
        else if (i < 7) {
            days[0][i] = 1;
        }
        else if (i < 7) {
            days[0][i] = 1;
        }
    }

    const getMonthDays = (month) => {

        month = (month === 0) ? 12 : month;

        if (month === 2) {
            if (year % 4 === 0) {
                if (year % 100 === 0) {
                    if (year % 400 !== 0) {
                        return 28;
                    }
                }
                return 29;
            }
            return 28;
        }

        if ((month <= 7 && month % 2 === 0) || (month >= 8 && month % 2 !== 0) ) {
            return 30;
        }

        return 31;

    };


    let weeks = [];

    let preMonthDays = getMonthDays(month - 1);


    let monthDays = getMonthDays(month);



    let i = 2 - dayOne;
    for (let j = 0; j < 6; j++) {
        let week = [];
        for (let k = 0; k < 7; k++){
            if (i > monthDays) {
                 week[k] =  (
                    /* eslint jsx-a11y/click-events-have-key-events: "off",  jsx-a11y/no-static-element-interactions: "off", jsx-a11y/no-noninteractive-element-interactions: "off" */
                    <p className=" w-1/7 ml-2 mr-2 mb-2 text-gray-500 text-center cursor-default" onClick={() => setMonth(month + 1)}>{i - monthDays}</p>
                );
            } else if (i <= 0) {

                week[k] =  (
                    /* eslint jsx-a11y/click-events-have-key-events: "off",  jsx-a11y/no-static-element-interactions: "off", jsx-a11y/no-noninteractive-element-interactions: "off" */
                    <p className="  w-1/7 ml-2 mr-2 mb-2 text-gray-500 text-center cursor-default" onClick={() => setMonth(month - 1)}>{preMonthDays + i}</p>
                );

            } else {
                if (i === currentDay && month === currentMonth && year === currentYear) {
                    week[k] =  (
                        /* eslint jsx-a11y/click-events-have-key-events: "off",  jsx-a11y/no-static-element-interactions: "off", jsx-a11y/no-noninteractive-element-interactions: "off" */
                            <p className="bg-blue-200 rounded w-1/7 pl-1 pr-1 ml-1 mr-1 mb-2 text-center cursor-pointer"
                                   onClick={(e) => {
                                       setDate(e.target.textContent + "." + month + "." + year);
                                       // setExpanded(false);
                                       setTimeout(() =>(
                                           setDatePicker(false)
                                       ), 200);
                                   }}>{i}</p>);
                } else {
                    week[k] =  (
                        /* eslint jsx-a11y/click-events-have-key-events: "off",  jsx-a11y/no-static-element-interactions: "off", jsx-a11y/no-noninteractive-element-interactions: "off" */
                        <p className="hover:bg-blue-500 rounded w-1/7 pl-1 pr-1 ml-1 mr-1 mb-2 text-center cursor-pointer"
                                   onClick={(e) => {
                                       setDate(e.target.textContent + "." + month + "." + year);
                                       // setExpanded(false);
                                       setTimeout(() =>(
                                           setDatePicker(false)
                                       ), 200);
                                   }}>
                            {i}
                        </p>
                    );
                }

            }


            i++;
        }
        weeks[j] = (<div className="flex flex-row text-black  ">{week}</div>);
    }


    const handleMonthChange = (x) => {

        let _month;

        if (x === "+") {
            _month = month === 12 ? 1 : month + 1;
        } else if (x === "-") {
            _month = month === 1 ? 12 : month - 1;
        }

        setMonth(_month);
    };

    return(


            <div >



                <p className="text-center  mb-5 text-gray-100 opacity-25 text-4xl"> {year} </p>


                <div className="flex flex-row justify-center items-center ">
                    <FontAwesomeIcon icon="chevron-left" className="focus:outline-none text-6xl text-gray-100 opacity-25 mr-5 cursor-pointer" onClick={() => setYear(year - 1)} />
                    <p className="mr-12 text-gray-100 opacity-25 text-6xl fade-left"> {year - 1} </p>
                    <div className="flex flex-col bg-white ">

                        <div className="flex flex-row pt-1 text-xl items-center justify-center bg-gray-400">

                            <FontAwesomeIcon icon="chevron-left" className="focus:outline-none w-1/6 text-2xl text-black cursor-pointer" onClick={() => handleMonthChange("-")}/>
                            <p className="w-2/3 text-center font-bold"> {months[month - 1]} </p>
                            <FontAwesomeIcon icon="chevron-right" className="focus:outline-none w-1/6 text-2xl text-black cursor-pointer" onClick={() => handleMonthChange("+")}/>

                        </div>

                        <div className="flex flex-row items-center  bg-gray-400 ">

                            <p className="w-1/7 ml-2 mr-2 text-center"> M </p>
                            <p className="w-1/7 ml-2 mr-2 text-center"> D </p>
                            <p className="w-1/7 ml-2 mr-2 text-center"> M </p>
                            <p className="w-1/7 ml-2 mr-2 text-center"> D </p>
                            <p className="w-1/7 ml-2 mr-2 text-center"> F </p>
                            <p className="w-1/7 ml-2 mr-2 text-center"> S </p>
                            <p className="w-1/7 ml-2 mr-2 text-center"> S </p>




                        </div>

                        {weeks}

                    </div>

                    <p className="ml-12 opacity-25 text-6xl fade-right"> {year + 1} </p>
                    <FontAwesomeIcon icon="chevron-right" className="focus:outline-none text-6xl text-gray-100 opacity-25 ml-5 cursor-pointer" onClick={() => setYear(year + 1)} />

                </div>



            </div>)



};

export default DatePicker;