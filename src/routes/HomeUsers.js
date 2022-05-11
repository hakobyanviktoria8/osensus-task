import React, { useState, useEffect } from 'react'
import "./../styles/HomeUsers.css"
import usersData from './../jsons/users.json';
import scansData from './../jsons/scans.json';

// console.log("usersData",usersData)
// console.log("scansData",scansData)

function HomeUsers() {
    const[scansAllData, setScansAllData]= useState([])
    const[page, setPage]= useState(0)

    useEffect(() => {
        const func = (arr)=>{
            const newArr = []
            let row = -1;
            for (let i = 0; i < arr.length; i++) {
                if (i % 3 === 0) {
                    row++;
                    newArr[row] = [];
                }
                newArr[row].push(arr[i]);
            }
            setScansAllData(newArr)
            // console.log(newArr)
        }    
        func(scansData)
    }, [])
    
    
    
    // const[users, setUsers]= useState(usersData)
    // const[scans, setScans]= useState(scansData)

  return (
    <div className='homeUsersWrapper'>
        <div className='statuses'>
            <h2>Statuses</h2>
            <div className='statuseTypes'>
                <div >
                    <span className='waiting'/>
                    <p>Waiting</p>
                </div>
                <div >
                    <span className='in_progress'/>
                    <p>In progress</p>
                </div>
                <div >
                    <span className='done'/>
                    <p>Done</p>
                </div>
                <div >
                    <span className='failed'/>
                    <p>Failed</p>
                </div>               
            </div>
        </div>
        <div className='mainContent'>
            <div className='searchWrapper'>
                <input  type="search"/>
            </div>
            <div className="usersWrapper">   
                {scansAllData[page]?.map(scan=>
                    <div className={`user ${scan.status}`} key={scan.id}>
                        <h2>{scan.id}</h2>
                        <h3>{usersData[scan.id]?usersData[scan.id].name:"Name"} / {usersData[scan.id]?usersData[scan.id].email:"Email"}</h3>
                        <div className='statusAndData'>
                            <span>{scan.status}</span>
                            <span>{scan.createdAt.slice(0,10)}</span>
                        </div>
                   </div>
                )}             
            </div>
            <div className="paginationWrapper">
                {scansAllData?.map((page,idx)=>
                    <button key={idx} onClick={()=>setPage(idx)}>{idx+1}</button>
                )}
            </div>
        </div>
    </div>
  )
}

export default HomeUsers
