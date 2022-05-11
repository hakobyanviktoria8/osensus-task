import React, { useState, useEffect } from 'react'
import "./../styles/HomeUsers.css"
import scansData from './../jsons/scans.json';
import StatuseType from '../components/StatuseType';
import UserComp from '../components/UserComp';

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
        }    
        func(scansData)
    }, [])
    
  return (
    <div className='homeUsersWrapper'>
        <div className='statuses'>
            <h2>Statuses</h2>
            <div className='statuseTypes'>
                <StatuseType className="waiting" type="Waiting"/>
                <StatuseType className="in_progress" type="In progress"/>
                <StatuseType className="done" type="Done"/>
                <StatuseType className="failed" type="Failed"/>            
            </div>
        </div>
        <div className='mainContent'>
            <div className='searchWrapper'>
                <input  type="search"/>
            </div>
            <div className="usersWrapper">   
                {scansAllData[page]?.map(scan=>
                    <UserComp scan={scan}  key={scan.id} />
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
