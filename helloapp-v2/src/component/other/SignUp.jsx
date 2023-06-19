

let SignUpComponent = () => {
    const handleSubmit=(e) => {
        e.preventDefault();

        console.log('name='+e.target.name.value)
        console.log('email='+e.target.email.value)
        console.log('password='+e.target.password.value)
        

    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="justify-content-center d-grid">

            <div className="card" style={{"width":"400px", "boxShadow":"3px 3px 5px grey"}}>
                <div className="card-header p-3" >
                    <h3 className="text-primary text-center">Open New Account</h3>
                </div>

                <div className="card-body" >
                    <div className="row m-3">
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="first name" name='name'/>
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-md-12">
                            <input type="email" className="form-control" placeholder="email id" name='email'/>
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-md-12">
                            <input type="password" className="form-control" placeholder="password" name='password' />
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-md-12 text-center">
                                <button className="btn-success btn">Register</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </form>
    )
}


export default SignUpComponent;