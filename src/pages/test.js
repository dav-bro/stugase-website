import React from "react";
import TimePicker from "../components/timePicker";


export default () => {

    // noinspection JSMismatchedCollectionQueryUpdate
    let childs = [];

    for (let i = 1; i <= 24; i++) {
       childs.push(
           <div className={" bg-blue-300 mb-3 pl-3 w-" + i + "/24" }>
               {i}/24
           </div>
       )
    }


    return(
    <div className="flex-grow">

        <div className="w-full mt-24">
            <h1 className="text-4xl border-1 between-line mb-10"><span className="between-line-span">Test Flex widths by n/24</span></h1>

           {/* {childs}
            <div className="flex flex-row items-center">
                <TimePicker maximum={24} onChange={(data) => console.log(data)} /> <p className="mx-2">:</p>  <TimePicker maximum={59} onChange={(data) => console.log(data)} />
            </div>*/}


        </div>

        <div className="w-1/3">
            <TimePicker/>
        </div>

    </div>
    )




}


