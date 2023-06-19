import React from 'react'
import JsonData from './data.json'
 function PlayerTable(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.code}</td>
                    <td>{info.team}</td>
                    <td>{info.tournament}</td>
                    <td>{info.goals}</td>
                    <td>{info.shots}</td>
                    <td>{info.discipline}</td>
                    <td>{info.rating}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table" border="5">
                <thead>
                    <tr>
                    <th>code</th>
                    <th>team</th>
                    <th>tournament</th>
                    <th>goals</th>
                    <th>shots</th>
                    <th>discipline</th>
                    <th>rating</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default PlayerTable;