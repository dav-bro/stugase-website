import React from "react";
import Header from "./header";
import {Divider, Row} from "antd";
import Col from "antd/es/grid/col";
import Title from "./title";



class Layout extends React.Component{



    render() {
        return(
            <div>
                <Header siteIndex={this.props.siteIndex}/>

               <Title title={this.props.title} text={this.props.text}/>

                <div >
                    <Row className="content">

                        <Col span={5} className="left-content">
                            {this.props.leftContent}

                        </Col>
                        <Col span={14} className="main-content">
                            {this.props.mainContent}

                        </Col>

                        <Col span={5} className="right-content">


                        </Col>

                    </Row>
                </div>

            </div>

        )

    }


}

export default Layout;