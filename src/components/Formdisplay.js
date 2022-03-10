import React, { useEffect, useState } from 'react';
import {savedata, getdata} from './Savedata';

const Forms = () => {

    const initialstate = {
        title : '',
        imageFile : '',
        blogger_name : ''
    } 
    const [noeData, setNowData] = useState(initialstate);
    const [isToggle, setToggle] = useState(false);
    const [getdatafromlocalhosty, setgetdata] = useState([]);
    useEffect (
        ()=> {
            setgetdata(getdata())
        }, []
    )


    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value

        setNowData(
           {[name]:value}
        )

        if(noeData.title && noeData.imageFile && noeData.imageFile){
            setToggle(!isToggle);
        }

    } 

    const handleSubmit = () => {
        if(isToggle){
        savedata(noeData)
        }
        else{
            return(
                <>  
                <h1>Data is not Correct plese fill data again</h1>
                </>
            )
        }
    }

    const searchMovie = () => [

    ]


    return(
    <>

    <span>Search Movie</span>
    <input type='search' onChange={searchMovie} / >
        <form id='form'>
            <label>
                Title:
                <input type="text"
                name="title"
                value={noeData.title}
                onChange={handleChange} />

            </label>
   
            <label>
            Image to be added :
            <input 
            type="file" 
            id="imageFile" 
            name='imageFile' 
            value={noeData.imageFile[0]}
            onChange={handleChange} />
            </label>
        
            <label>
            Blogger Name:
                <input type="text"
                name="blogger_name"
                value={noeData.blogger_name}
                onChange={handleChange} />
            </label>
            <input type="submit" onClick={handleSubmit} value="Submit" />
        </form>

        <div>{isToggle?'':<handleSubmit />}</div>

        <div>
            {getdatafromlocalhosty.map(val=>{
                return(
                    <>
                        <div>
                            <h1>{val.title}</h1>
                            <h3>{val.blogger_name}</h3>
                            <img src={val.imageFile} />
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    </>
                )
            })}
        </div>

    </>
    )

}

export default Forms;