import React from 'react';
import {withTranslation} from "react-i18next";
import LayoutContent from "../components/layoutContent";
import ContextConsumer from "../components/context";
import {isLoggedIn} from "../services/auth";
import AddDate from "../components/addDate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

class DatesClass extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <ContextConsumer>
                {({ data }) => (
                    <LayoutContent theme={data.theme} title={t('dates.header.title')} text={t('dates.header.text')}>
                        <div key="main-content" className="">

                            <h2 className="text-xl border-1 border-accent between-line"><span className="between-line-span">April</span></h2>


                                    <DateRowClass type="StugA-Sitzung" date="02.03.2020" time="14:00"/>
                            {isLoggedIn() ? <AddDate type="add" /> : null }


                            {/*<PlusCircleOutlined className="fixed bottom-0 right-0 mr-4 mb-4 shadow-all  rounded-full text-4xl" />*/}

                        </div>
                    </LayoutContent>
                )}
            </ContextConsumer>

        )
    }
}

const Dates = withTranslation()(DatesClass);


class DateRowClass extends React.Component {


    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    state={
      datepicker: false,
    };

    render(){

        let { type, date, time } = this.props;
        const  { datepicker } = this.state;


        let leftIcon;
        let rightIcon = null;
        let text;
        let rightText = null;

        // let onAdd = null;
        let classNamePrefix = "";
        let handleClick = null;


        switch (type) {
            case 'add':
                leftIcon = <FontAwesomeIcon icon="plus-circle" className="focus:outline-none text-3xl" />;
                text = "Neuer Termin";
                handleClick = () => this.handleClick();
                classNamePrefix = " bg-btn-primary text-white cursor-pointer";
                break;
            default:
                leftIcon = (<FontAwesomeIcon icon="users" className="text-3xl" />);
                rightIcon = (<FontAwesomeIcon icon="calendar" className="text-3xl float-right " />);
                text = type;
                rightText = date + ", " + time;

        }



        return (
            <>
           <DateRow

               leftIcon={leftIcon}
               rightIcon={rightIcon}
               rightText={rightText}
               text={text}
               classNamePrefix={classNamePrefix}
               handleClick={handleClick}
           />
                {datepicker ?
                    <div className="bg-disabled cursor-default">
                        <div className="text-transparent text-center  hover:text-gray-100 opacity-25 fixed left-0 h-48 top-0 w-full">
                            <FontAwesomeIcon icon="times-circle" className="focus:outline-none mt-6 text-5xl cursor-pointer" onClick={() => this.handleClick()}/>
                        </div>
                        <DatePicker />
                    </div>
                    :
                    null
                }
                </>
        );
    }

    handleClick() {
        // console.log(e.target);
        this.setState({datepicker: !this.state.datepicker});
    }

}

const DateRow = ({leftIcon, rightIcon, rightText, text, classNamePrefix, handleClick}) => (
    /* eslint jsx-a11y/click-events-have-key-events: "off", jsx-a11y/no-static-element-interactions: "off" */
    <div className={"ml-1 mr-1 p-2 flex flex-row border border-accent items-center mb-3 " + classNamePrefix} align="top" onClick={handleClick}>
        <div className="flex w-2/24">
            {leftIcon}
        </div>
        <div className="w-10/24 is-left">
            {text}
        </div>
        <div className="w-10/24 text-right">
            {rightText}
        </div>
        <div className="w-2/24" >
            {rightIcon}
        </div>
    </div>
);


class DatePicker extends React.Component {


    months = [
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


    state={
        month: 1,
        year: 2020,
        day: 5
    };


    componentDidMount() {
        var date = new Date();
        this.setState({
            month: date.getMonth(),
            year: date.getFullYear(),
            day: date.getDate()
        })
    }

    render() {

        const { month, year, day } = this.state;

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
                    week[k] =  (<p className=" w-1/7 ml-2 mr-2 mb-2 text-gray-500 text-center">{i - monthDays}</p>);
                } else if (i <= 0) {

                    week[k] =  (<p className="  w-1/7 ml-2 mr-2 mb-2 text-gray-500 text-center">{preMonthDays + i}</p>);

                } else {
                    if (i === day) {
                        week[k] =  (<p className="bg-blue-200 rounded w-1/7 pl-1 pr-1 ml-1 mr-1 mb-2 text-center">{i}</p>);
                    } else {
                        week[k] =  (<p className="hover:bg-blue-500 rounded w-1/7 pl-1 pr-1 ml-1 mr-1 mb-2 text-center">{i}</p>);
                    }

                }


                i++;
            }
            weeks[j] = (<div className="flex flex-row text-black  ">{week}</div>);
        }


        return(
                 (
                        <div className="modal-content w-64">



                                <p className="text-center  mb-5 text-gray-100 opacity-25 text-4xl"> {year} </p>


                            <div className="flex flex-row justify-center items-center ">
                                <p className="mr-12 text-gray-100 opacity-25 text-6xl fade-left"> {year - 1} </p>
                                <FontAwesomeIcon icon="chevron-left" className="focus:outline-none text-6xl text-gray-100 opacity-25 mr-5 cursor-pointer" onClick={() => this.setState({year: year - 1})} />
                            <div className="flex flex-col bg-white ">

                                <div className="flex flex-row pt-1 text-xl items-center justify-center bg-gray-400">

                                    <FontAwesomeIcon icon="chevron-left" className="focus:outline-none w-1/6 text-2xl text-black cursor-pointer" onClick={() => this.handleMonthChange("-")}/>
                                    <p className="w-2/3 text-center font-bold"> {this.months[month - 1]} </p>
                                    <FontAwesomeIcon icon="chevron-right" className="focus:outline-none w-1/6 text-2xl text-black cursor-pointer" onClick={() => this.handleMonthChange("+")}/>

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

                                <FontAwesomeIcon icon="chevron-right" className="focus:outline-none text-6xl text-gray-100 opacity-25 ml-5" onClick={() => this.setState({year: year + 1})} />
                                <p className="ml-12 opacity-25 text-6xl fade-right"> {year + 1} </p>

                        </div>



                    </div>)


        )
    }

    handleMonthChange(x) {

        let { month } = this.state;

        if (x === "+") {
            month = month === 12 ? 1 : month + 1;
        } else if (x === "-") {
            month = month === 1 ? 12 : month - 1;
        }

        this.setState({month: month});
    }


}



export default Dates;
