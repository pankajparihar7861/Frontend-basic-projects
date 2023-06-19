import axios from 'axios';

let getBranch = () => {

}

let getLoan = () => {

}

let saveBranch = (obj) => {

}

let saveCustomer = (obj) => {
    let pobj = axios.post(`http://localhost:5500/customer`,obj);
    return pobj;
}

let removeCustomer = (id) => {

}

let applyForLoan = (obj) => {

}


export {saveCustomer};


