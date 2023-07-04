import React,{useEffect, useState} from 'react';
import News from '../News/News'
import css from './Article.module.css'

const Articles = () => {


    const [Data, setData] = useState([])

    const getData = async () => {
        let res = await fetch("https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true")
        let resData = await res.json();
        console.log("this is response Data", resData)
        
        setData(resData)
        
        
    

    }

   
    
    useEffect(() => {
        getData();
        
    }, [])

    useEffect(() => {
        console.log(Data)
    }, [Data])
  
    
    return(
        <>
        <div className={css.article__content}>
            <div className={css.article__heading}>
                <h1> Zaman Covid Tracker </h1>
            </div>
            <div className={css.article__news} >
                {
                    Data.map((item , index) => {
                        
                        return <News title={item.country} infected={item.infected} tested={item.tested} lastUpdatedApify={item.lastUpdatedApify} deceased={item.deceased} moreData={item.moreData} sourceUrl={item.sourceUrl} />

                    } )
                }
            </div>
        </div>
        </>
    )

}

export default Articles;