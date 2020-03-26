import React from "react";
import Header from "./header";
import {Row} from "antd";
import Col from "antd/es/grid/col";
import Title from "./title";
import useWindowDimensions from "../hooks/useWindowDimensions";

const justMiddleContent = ["xs", "sm", "md" ];

class Layout extends React.Component{

    static LeftContent = "left-content";
    static MainContent = "main-content";
    static RightContent = "right-content";


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
            }
        });

        if (justMiddleContent.some(x => x === this.props.breakpoint)) {
            mainContent.push(leftContent, rightContent);
        }


        return(
            <div>
                <Header siteIndex={this.props.uri}/>

               <Title title={this.props.title} text={this.props.text}/>

                <div >
                    <Row className="content">

                        <Col xs={{span: 0}} lg={{span: 4}} xl={{span: 5}} xxl={{span: 5}} className="left-content">

                            {leftContent}

                        </Col>
                        <Col xs={{span: 24}} lg={{span: 16}} xl={{span: 14}} xxl={{span: 14}} className="main-content">

                            {mainContent}

                        </Col>

                        <Col xs={{span: 0}} lg={{span: 4}} xl={{span: 5}} xxl={{span: 5}} className="right-content">

                            {rightContent}

                        </Col>

                    </Row>
                </div>

            </div>

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

Layout = LayoutWithHook(Layout);


export default Layout;