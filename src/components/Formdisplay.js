import React, { useEffect, useState } from 'react';
import {savedata, getdata, deleteItemsinlocalstorage} from './Savedata';

const Forms = () => {

    const initialstate = {
        title : '',
        imageFile : '',
        blogger_name : ''
    } 
    const [seartchValue, setSeartchValue] = useState('')
    const [noeData, setNowData] = useState(initialstate);
    const [isToggle, setToggle] = useState(false);
    const [getdatafromlocalhosty, setgetdata] = useState([]);
    useEffect (
        ()=> {
            setgetdata(getdata())
        }, [isToggle]
    )


    const handleChange = async(e) =>{
        const name = e.target.name;
        const value = e.target.value
        console.log(e.target.value);
        console.log(e.target.name);

        console.log(noeData);
        await setNowData({ ...noeData , [name] : value})

        if(noeData.title!='' && noeData.blogger_name!='' && noeData.imageFile!=''){
            console.log("done");
            await setToggle(!isToggle);
        }

    } 

    const HandleSubmit = () => {
        console.log(isToggle);
        if(isToggle){
            console.log('data is saved');
        savedata(noeData.title, noeData)
        setToggle(!isToggle)
        }
        else{
            return(
                <>  
                <h1>Data is not Correct plese fill data again</h1>
                </>
            )
        }
    }

    const searchMovie = (e) => {
        let val = e.target.value;
        if(val){
        setSeartchValue(val);
        setgetdata(
            getdatafromlocalhosty.filter((element)=>{
                let data =element.title.split('');
                return data.includes(val);
            })
        )
        }else{
            setgetdata(getdata())


        }


    }

    const handleDelete = (item) => {
        deleteItemsinlocalstorage(item);
        setgetdata(
            getdatafromlocalhosty.filter(val=>{
                return val.title===item
            })
        )


    }

    const handleEdit = (val) => {
        const title = prompt('add your updated title');
        const blogger_name = prompt('add your new bloggername');
        const file = prompt('add you new file');
        let ob = {
            title,
            blogger_name,
            file

        }
        savedata(val, ob);


    }

    


    return(
    <>

    <span>Search Movie</span>
    <input type='search' onChange={searchMovie} value={seartchValue} / >
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
            value={noeData.imageFile}
            onChange={handleChange} />
            </label>
        
            <label>
            Blogger Name:
                <input type="text"
                name="blogger_name"
                value={noeData.blogger_name}
                onChange={handleChange} />
            </label>
            <input className='btn' type="submit" onClick={HandleSubmit} value="Submit" />
        </form>

        <div>{isToggle?<HandleSubmit />:""}</div>

        <div>
            {getdatafromlocalhosty?getdatafromlocalhosty.map(val=>{
                return(
                    <>
                        <div className='' key={Math.random()*10002384}>
                            <h1>{val.title}</h1>
                            <h3>{val.blogger_name}</h3>
                            <img src={val.imageFile} />
                            <button onClick={()=>handleDelete(val.title)}>Delete</button>
                            <button onClick={()=> handleEdit(val.title)}>Edit</button>
                        </div>
                    </>
                )
            }):"plese wait"}
        </div>

    </>
    )

}

export default Forms;
