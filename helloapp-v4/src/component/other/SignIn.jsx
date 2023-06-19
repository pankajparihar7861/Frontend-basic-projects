import { useState } from "react";

import {saveCustomer} from '../../services/BankService';



let SignInComponent = () => {

    let [userState, setUser] = useState({emailid:"", pwd:""});




    let read = (event) => {

        setUser({...userState, [event.target.name]:event.target.value});

    }



    let loginClick = (event) => {

        alert(userState)

        alert("pressed login button")

    }



    return (

        <div className="justify-content-center d-grid">



            <div className="card" style={{ "width": "400px" }}></div>
            <div className="card-header p-3"   >

<h3 className="text-primary text-center">Sign In</h3>

</div>



<div className="card-body">

<div className="row m-3">

    <div className="col-md-12">

        <input type="email" className="form-control" placeholder="email id" onChange={read} name="emailid" />

    </div>



</div>



<div className="row m-3">

    <div className="col-md-12">

        <input type="password" className="form-control" placeholder="password" onChange={read} name="pwd" />

    </div>



</div>



<div className="row m-3">

    <div className="col-md-12 text-center">

        <button className="btn-success btn" onClick={loginClick}></button>
        </div>

</div>

</div>

</div>

)

}



export default SignInComponent;