import React from "react";
import LayoutContent from "../components/LayoutContent";
import Button from "../components/button";
import Chat from "../components/chat";

export default () => {

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

            {childs}

           {/* <TestCollapse/>
            <TestCollapse/>*/}

            <Button type="primary" className="ml-5 mb-5">
                primary
            </Button>

            <Button type="danger" className="ml-5 mb-5" onClick={() => console.log("testtt button")}>
                danger
            </Button>

        </div>

        <Chat/>

        </div>
    )




}



class TestCollapse extends React.Component {


    state={
        expanded: false
    }


    render() {

        const { expanded } = this.state;

        return(
            <div className="w-full ">
                <div className="w-full h-12 bg-gray-300 cursor-pointer" onClick={() => this.setState({expanded: !expanded})}>

                </div>

                <div className={"overflow-hidden w-full bg-red-100 transform duration-700 origin-top  " + (expanded ? " max-h-12" : " max-h-0") }>
                    <div className="absolute">
                        test
                    </div>

                </div>

            </div>
        )
    }

}