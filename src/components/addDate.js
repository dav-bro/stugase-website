import React, { useState, useEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import TimePicker from "./timePicker";
import DatePicker from "./datePicker";
import Modal from "./modal";

export default () => {


    const [ datePicker, setDatePicker ] = useState(false);


    const [ expanded, setExpanded ] = useState(false);


    const [ type, setType ] = useState("question");

    const [ title, setTitel ] = useState("");

    const [ date, setDate ] = useState("");

    const [ time, setTime ] = useState({hour: 0, minute: 0});

    const [ selectType, setSelectType ] = useState(false);


    const liClass = "flex flex-row border-b py-2 px-3 border-white hover:opacity-50";

    const _setType = (type) => {
        setSelectType(false);

        setTimeout(() =>(
                setType(type)
        ), 400
        );
    };

    return (
        <div className={"mx-1 flex flex-row-reverse border border-accent items-center mb-3 "} align="top" onClick={!expanded ?  () => setExpanded(!expanded) : null}>

            <div className={"cursor-pointer py-2 bg-blue-500 text-white overflow-hidden h-12 transition-all duration-300 flex flex-row items-center " + (!expanded ? " w-full px-2" : "w-0")} align="top" >
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
                        <FontAwesomeIcon icon={type} fixedWidth  className="text-3xl cursor-pointer mr-2" onClick={() => setSelectType(!selectType)}/>
                        <ul className={"absolute cursor-pointer text-white bg-green-500 mt-2 -translate-x-2 transform  overflow-hidden shadow-all border-collapse  mt-2  transition-all duration-500 h-auto " + (selectType ? " max-h-64 " : " max-h-0 overflow-hidden ") } >
                            <li className={liClass} onClick={() => _setType("users")}>
                                <FontAwesomeIcon icon="users" fixedWidth className="text-3xl mr-2"/>
                                <p className="float-right">Sitzung</p>
                            </li>
                            <li className={liClass} onClick={() => _setType("glass-cheers")}>
                                <FontAwesomeIcon icon="glass-cheers" fixedWidth  className="text-3xl mr-2"/>
                                <p className="float-right">Suffen</p>
                            </li>
                            <li className={liClass} onClick={() => _setType("calendar-check")}>
                                <FontAwesomeIcon icon="calendar-check" fixedWidth className="text-3xl mr-2"/>
                                <p className="float-right">Sonstiges</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-14/24 is-left">
                    <div contentEditable placeholder="Titel" className="flex items-center cursor-text focus:outline-none" onInput={(data) => setTitel(data.target.textContent)}>{}</div>
                </div>
                <div className="w-3/24 ">
                    {<div className="cursor-pointer" onClick={() => setDatePicker(true)}>
                        <p>{date ? date : "Datum"}</p>
                    </div>}
                    <Modal enabled={datePicker} setEnabled={setDatePicker}><DatePicker setDate={setDate} setDatePicker={setDatePicker}/> </Modal>

                </div>
                <div className="w-3/24 ">
                   <TimePicker />


                </div>
                <div className="w-2/24 overflow-hidden flex" >

                    <FontAwesomeIcon icon={"check"} className={"focus:outline-none cursor-pointer text-3xl  float-right transform transition-all duration-300 overflow-hidden " + (title && date && time && type !== "question" ? "scale-100" : "scale-0")} onClick={() => setExpanded(!expanded)}/>

                    <FontAwesomeIcon icon={"times-circle"} className="focus:outline-none cursor-pointer text-red-500 text-3xl float-right ml-4" onClick={() => setExpanded(!expanded)}/>


                </div>

            </div>


        </div>
    )

}

