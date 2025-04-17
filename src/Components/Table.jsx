import React, { useState } from "react";


import table_data from "../Data/tabledata";

export default function Table(){

    const [data, setData] = useState(table_data);

    const handleSortDate = () =>{       
        const sortedDate = [...data].sort((a,b) => new Date(b.date)- new Date(a.date) || b.views-a.views); // first we sort for date and then if same date , sort by viewws
        setData(sortedDate) ;
    }

    const handleSortViews =() =>{
        const sortedView = [...data].sort((a,b) => b.views-a.views || new Date(b.date)- new Date(a.date));
        setData(sortedView);
    }

    return(
    <div >
         <h1>Date and Views Table</h1>
         <button className="button" onClick={handleSortDate}>Sort by Date</button>
         <button onClick={handleSortViews} className="button">Sort by Views</button>       
           
         <table className="table-div">
           <thead>
               <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
           </thead>
           <tbody>
            {data.map((row,index)=>{
                return (<tr key={index}> 
                        <td>{row.date}</td>
                        <td>{row.views}</td>
                        <td>{row.article}</td>
                       </tr>) })}          

           </tbody>
         </table>  

    </div>);
}