import React, { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

export default () => {


    const [ expanded, setExpanded ] = useState(false);


    const [ type, setType ] = useState("question");

    const [ title, setTitel ] = useState("");

    const [ date, setDate ] = useState("");

    const [ time, setTime ] = useState("");

    const [ selectType, setSelectType ] = useState(false);


    const liClass = "flex flex-row border-b p-2  border-white hover:opacity-50";

    const _setType = (type) => {
        setSelectType(false);

        setTimeout(() =>(
                setType(type)
        ), 400
        );
    };

    return (
        <div className={"mx-1 flex flex-row border border-accent items-center mb-3 cursor-pointer "} align="top" onClick={!expanded ?  () => setExpanded(!expanded) : null}>

            <div className={" py-2 bg-blue-500 text-white overflow-hidden h-12 transition-all duration-300 flex flex-row items-center " + (!expanded ? " w-full px-2" : "w-0")} align="top" >
                <div className="flex w-2/24">
                    <FontAwesomeIcon icon="plus-circle" className="focus:outline-none text-3xl" />

                </div>

                <div className="w-10/24 whitespace-no-wrap">
                    Neuer Termin
                </div>

            </div>

            <div className={" py-2 bg-green-500 flex text-white flex-row  transition-all duration-300 items-center " + (expanded ? " w-full px-2" : "w-0 overflow-hidden")} align="top" >
                <div className="flex w-2/24">
                    <div className="relative ">
                        <FontAwesomeIcon icon={type} className="text-3xl mr-2" onClick={() => setSelectType(!selectType)}/>
                        <ul className={"absolute text-white bg-green-500  shadow-all border-collapse  mt-2 arrow-top-left transition-all duration-500 h-auto " + (selectType ? " max-h-64 border border-white" : " max-h-0 overflow-hidden ") } >
                            <li className={liClass} onClick={() => _setType("users")}>
                                <FontAwesomeIcon icon="users" className="text-3xl mr-2"/>
                                <p className="float-right">Sitzung</p>
                            </li>
                            <li className={liClass} onClick={() => _setType("glass-cheers")}>
                                <FontAwesomeIcon icon="glass-cheers" className="text-3xl mr-2"/>
                                <p className="float-right">Suffen</p>
                            </li>
                            <li className={liClass} onClick={() => _setType("calendar-check")}>
                                <FontAwesomeIcon icon="calendar-check" className="text-3xl mr-2"/>
                                <p className="float-right">sonstiges</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-14/24 is-left">
                    {title ? title : (<div className="flex items-center "> Titel </div>)}
                </div>
                <div className="w-3/24 text-right">
                    {date ? date : (<div className="flex items-center "> Datum</div>)}
                </div>
                <div className="w-3/24 text-right">
                    {time ? time : (<div className="flex items-center "> Zeit</div>)}
                </div>
                <div className="w-2/24" >
                    {title && date && time ? "check" : <FontAwesomeIcon icon="times-circle" className="focus:outline-none text-3xl float-right" onClick={() => setExpanded(!expanded)}/>}
                </div>

            </div>


        </div>
    )

}

