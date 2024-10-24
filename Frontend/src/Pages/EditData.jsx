import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditData=()=>{
     const {empid} = useParams();
     const [mydata,setMydata] = useState({});
     const loaddata=()=>{
        let api = "http://localhost:9000/emplooye/empeditdata";
        axios.post(api,{id:empid}).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
    }

    useEffect(()=>{
        loaddata();
    },[])

     const handleinput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setMydata(values=>({...values,[name]:value}))
        console.log(mydata);
     }
 const handleSubmit=()=>{
    let api = "http://localhost:9000/emplooye/empeditdatasave"
    axios.post(api,mydata).then((res)=>{
        alert("Data Updated")
    })
 }
    return(
        <>
        <h1>You Can Update Your data </h1>
        <br></br>
        <label>Change Emp NO</label>
        <input type="text" name="empno" value={mydata.empno} onChange={handleinput}></input><br></br>
        <label>Change Emp NO</label>
        <input type="text" name="email" value={mydata.email} onChange={handleinput}></input><br></br>
        <label>Change Emp NO</label>
        <input type="text" name="name" value={mydata.name} onChange={handleinput}></input><br></br>
        <label>Change Emp NO</label>
        <input type="text" name="pass" value={mydata.pass} onChange={handleinput}></input><br></br>
        <button onClick={handleSubmit}>Save Change</button>
        </>
    )
}
export default EditData;