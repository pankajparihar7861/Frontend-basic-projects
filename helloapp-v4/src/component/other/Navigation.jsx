

let NavigationComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="/">
                    <i class="fa-solid fa-building-columns mx-3"></i>
                        Fake Bank App
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/facilities">Facilities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/offer">Offers</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Loan
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Car</a></li>
                                    <li><a className="dropdown-item" href="#">Home</a></li>
                                    <li><a className="dropdown-item" href="#">Personal</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Calculator</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <a href="/signup" className="btn btn-light text-primary fw-bold bg-light">
                                <i class="fa-solid fa-user-plus mx-2"></i>
                                New Account
                            </a >
                            <a href="/Signin" className ="btn btn-light text-primary fw-bold bg-light">
                                <i class="fa-solid fa-key mx-2"></i>
                                Sign In</a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationComponent;