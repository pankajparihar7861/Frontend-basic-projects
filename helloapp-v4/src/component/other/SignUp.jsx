import { useState } from "react";
import {saveCustomer} from '../../services/BankService';


let SignUpComponent = () => {

    let [userState, setUser] = useState({fname:"", email:"", password:""});


    let read = (event) => {
        setUser({...userState, [event.target.name]:event.target.value});
    }

    let saveClick = (event) => {
        //console.log(userState);

        let pobj = saveCustomer(userState);

        pobj.then((response)=>{
            console.log(JSON.stringify(response, null, 3));
        });

        pobj.catch((error)=>{
            console.log(JSON.stringify(error, null, 3));
        });
    }

    return (
        <div className="justify-content-center d-grid">

            <div className="card" style={{"width":"400px", "boxShadow":"3px 3px 5px grey"}}>
                <div className="card-header p-3" >
                    <h3 className="text-primary text-center">Open New Account</h3>
                </div>

                <div className="card-body" >
                    <div className="row m-3">
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="first name" onChange={read} name="fname"/>
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-md-12">
                            <input type="email" className="form-control" placeholder="email id" onChange={read} name="email" />
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-md-12">
                            <input type="password" className="form-control" placeholder="password" onChange={read} name="password" />
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-md-12 text-center">
                                <button className="btn-success btn" onClick={saveClick}>Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default SignUpComponent;