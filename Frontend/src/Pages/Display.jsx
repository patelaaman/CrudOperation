
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios"
const Display=()=>{
    const [mydata,setMydata] = useState([]);
    const loadData=()=>{
        let api="http://localhost:9000/emplooye/empdisplaydata";
        axios.get(api).then((res)=>{
             setMydata(res.data);
        })
    }
    useEffect(()=>{
       loadData();
    },[])

    const ans = mydata.map((key)=>{
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
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>EmpNO</th>
          <th>Email</th>
          <th>Name</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
      {ans}
      </tbody>
    </Table>
        </>
    )
}
export default Display