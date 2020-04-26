import React from "react";
import Title from "./title";
import ContextConsumer from "./Context";
import "../static/styles/main.css";
import withHooks from "../hooks/withHooks";
import RightOutlined from "@ant-design/icons/es/icons/RightOutlined";
import LeftOutlined from "@ant-design/icons/es/icons/LeftOutlined";

// const justMiddleContent = [ "sm", "md" ];


class LayoutContent extends React.Component{



    state={
        rightExpanded: false,
        leftExpanded: false
    }


    render() {

        let leftContent = null;
        let mainContent = this.props.children;
        let rightContent = null;

        const { rightExpanded, leftExpanded } = this.state;



        React.Children.map(this.props.children, child => {
            switch (child.key) {
                case "left-content":
                    leftContent = child;
                    break;
                case "main-content":
                    mainContent = [child];
                    break;
                case "right-content":
                    rightContent = child;
                    break;
                default:
                    break;
            }
        });



        return(
            <ContextConsumer>
                {({ data }) => (
                <div className="flex-grow">

                    <div className="flex flex-col h-full">

                    <Title theme={data.theme} title={this.props.title} text={this.props.text}/>


                        <div className="flex flex-row flex-grow">

                            <div className="w-0 lg:w-6/24 xl:w-5/24 ">
                                {leftContent}
                            </div>


                            <div className="w-24/24 lg:w-12/24 xl:w-14/24 border-l border-primary border-b-0 border-r shadow ">
                                {mainContent}

                                    <div className="block lg:hidden">
                                        <div className="fixed right-0 top-0 h-full w-0 bg-primary z-10 side-nav-left" style={{width: rightExpanded ? "100%" : 0}}>
                                            <div
                                                className=" transform -translate-x-8  absolute lg:hidden left-0 w-8 top-1/2  border shadow pr-3 pt-3 pb-3 z-20 bg-primary"
                                                onClick={() => this.setState({rightExpanded: !rightExpanded})}>
                                                <LeftOutlined className="hover:rotate-180 duration-700 transform m-2 "/>
                                            </div>
                                                {rightContent}
                                          {/*  <div className=" left-0 top-1/2 p-2 border shadow pr-4 pl-4 pt-6 pb-6 z-20 bg-primary" onClick={() => this.setState({rightExpanded: !rightExpanded})}>
                                                <RightOutlined className="image-center-vertical m-2 "/>
                                            </div>*/}
                                        </div>
                                    </div>


                            </div>


                            <div className="hidden fixed lg:block w-0 lg:w-6/24 xl:w-5/24 bottom-0 right-0 z-40">
                                {rightContent}
                            </div>


                        </div>

                    </div>
                </div>
                )}
            </ContextConsumer>

        )

    }


}


LayoutContent = withHooks(LayoutContent);


export default LayoutContent;