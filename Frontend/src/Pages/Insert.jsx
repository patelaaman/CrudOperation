import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Insert=()=>{
      const [input,setInput] = useState({});
      const handleinput=(e)=>{
        let  name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
      }

      const handleSubmit=(e)=>{
        e.preventDefault();
         let api = "http://localhost:9000/emplooye/empdatasave";
         axios.post(api,input).then((res)=>{
            alert("Data Succesfully Submited");
             console.log(res)
         }).then(()=>{
          setInput({
            "empno":"",
            "email":"",
            "name":"",
            "pass":""
          })
         }).catch(err=>{
          alert("data not submited",err);
        })
      }

    return(
        <>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee No</Form.Label>
        <Form.Control type="text" name='empno' value={input.empno} onChange={handleinput} placeholder="Enter employye no" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name='email' value={input.email} onChange={handleinput} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handleinput} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name='pass' value={input.pass} onChange={handleinput} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Insert