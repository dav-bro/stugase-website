import React from 'react'
import {useTranslation} from "react-i18next";


export default function Title(props) {
    const { t } = useTranslation();
    return(

        <div className="flex page-head bg-accent">

            <div className="w-0 lg:w-6/24 xl:w-5/24 ">

            </div>


            <div className="w-24/24 lg:w-12/24 xl:w-14/24">
                <h1 className="text-4xl heading">{props.title ? props.title : t('in-progress')}</h1>
                <p>{props.text ? props.text : t('in-progress')}</p>
            </div>


            <div className="w-0 lg:w-6/24 xl:w-5/24 ">

            </div>


        </div>

    )


}
