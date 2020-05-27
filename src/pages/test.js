import React, {useState} from "react";
import TimePicker from "../components/simpleTimePicker";
import Modal from "../components/modal";

export default () => {

    let childs = [];

    for (let i = 1; i <= 24; i++) {
       childs.push(
           <div className={" bg-blue-300 mb-3 pl-3 w-" + i + "/24" }>
               {i}/24
           </div>
       )
    }

    const [enabled, setEnabled ] = useState(false);

    return(
        <div className="w-full mt-24">
            <h1 className="text-4xl border-1 between-line mb-10"><span className="between-line-span">Test Flex widths by n/24</span></h1>

           {/* {childs}
            <div className="flex flex-row items-center">
                <TimePicker maximum={24} onChange={(data) => console.log(data)} /> <p className="mx-2">:</p>  <TimePicker maximum={59} onChange={(data) => console.log(data)} />
            </div>*/}

            <div className="m-16">
                <button onClick={() => setEnabled(true)}> click</button>

                <Modal enabled={enabled} setEnabled={setEnabled}>
                    <div className="w-40 h-40 bg-white^modal-content">
                        test
                    </div>
                </Modal>
            </div>

        </div>
    )
}



