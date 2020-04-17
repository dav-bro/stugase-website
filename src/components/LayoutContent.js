import React from "react";
import Title from "./title";
import useWindowDimensions from "../hooks/useWindowDimensions";
import ContextConsumer from "./Context";

const justMiddleContent = [ "sm", "md" ];


class LayoutContent extends React.Component{

    render() {


        let leftContent = null;
        let mainContent = this.props.children;
        let rightContent = null;



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

        if (justMiddleContent.some(x => x === this.props.breakpoint)) {
            mainContent.push(leftContent, rightContent);
        }


        return(
            <ContextConsumer>
                {({ data }) => (
                <div>

                    <Title theme={data.theme} title={this.props.title} text={this.props.text}/>

                    <div >

                        <div className="flex flex-row ">

                            <div className="w-0 lg:w-6/24 xl:w-5/24 ">
                                {leftContent}
                            </div>


                            <div className="w-24/24 lg:w-12/24 xl:w-14/24 border-l border-primary border-b-0 border-r shadow h-screen">
                                {mainContent}
                            </div>


                            <div className="w-0 lg:w-6/24 xl:w-5/24 ">
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

function LayoutWithHook(Component) {
    return function WrappedComponent(props) {
        const windowDimensions = useWindowDimensions();
        const breakpoint = windowDimensions ? windowDimensions.breakpoint : "xxl";
        return <Component {...props} breakpoint={breakpoint} />;
    }
}

LayoutContent = LayoutWithHook(LayoutContent);


export default LayoutContent;