import { useState } from "react";
import axios  from "axios";
import {message} from "antd"
const Search=()=>{
    const [empno,setEmpno] = useState("");
    const [mydata,setMydata] = useState([]);
    const handleSubmit=()=>{
        let api ="http://localhost:9000/emplooye/empsearch";
        axios.post(api,{empno:empno}).then((res)=>{
            setMydata(res.data);
         if(res.data.length==0){
            message.error("You have Enter Wrong  Information")
           }
        })
    }
    const ans= mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>{key.empno}</td>
            <td>{key.email}</td>
            <td>{key.name}</td>
            <td>{key.pass}</td>
          </tr>
        </>
      )
    })
    return(
      <>
       <h1>Search Here By the Emplooye Number</h1>
       <hr size="4px" color="red"></hr>
       <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} placeholder="Enter Empno"></input>
       <button onClick={handleSubmit}>Search Data</button>
       <hr size="4px"></hr>
       {ans}
      </>
    )
}
export default Search;