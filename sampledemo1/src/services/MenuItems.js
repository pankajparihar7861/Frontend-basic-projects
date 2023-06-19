import axios from 'axios';



let getTeamdata = (obj) => {

    let pobj = axios.get(`http://localhost:5500/menuitems`,obj);

    return pobj;

}




export {getTeamdata};