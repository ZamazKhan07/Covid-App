import React from 'react';
import css from "./News.module.css"

const News = (props) => {
    return (
        <>
        <div className={css.news__container}>
            <div className={css.news__mainContant}>
                <div className={css.news__heading}>
                    <h2> {props.title} </h2>
                </div>
                <div className={css.news__data} >
                    <p> Infected : {props.infected} </p>
                    <p> recovered :  {props.recovered} </p>
                    <p> deceased : {props.deceased} </p>
                    <p> tested : {props.tested} </p>
                    <p> For More Data : <a href={props.sourceUrl}> {props.moreData} </a></p>
                    <h4> Last Updated : {props.lastUpdatedApify} </h4>
                </div>
            </div>

        </div>


        </>
    )
}


export default News;