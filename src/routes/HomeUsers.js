import React, { useState, useEffect } from 'react'
import "./../styles/HomeUsers.css"
import scansData from './../jsons/scans.json';
import usersData from './../jsons/users.json';
import StatuseType from '../components/StatuseType';
import UserComp from '../components/UserComp';

function HomeUsers() {
    const[scansAllData, setScansAllData]= useState([])
    const[page, setPage]= useState(0)
    const[searchUser, setSearchUser]= useState("")
    const[hideUsersList, setHideUsersList]= useState(false)
    const[findUser, setFindUser]= useState(null)

    const handleChange = (e) => {
        setSearchUser(e.target.value)
    }
    //write user name submit enter, search user data 
    const handleSubmit = (e) =>{
        e.preventDefault() 
        setHideUsersList(true)
        setFindUser(usersData.find(user => user.name===searchUser))
        setSearchUser("")
    }

    // make matrix in my users array
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
                <form onSubmit={handleSubmit}>
                    <input 
                        value={searchUser} 
                        type="text" 
                        placeholder='Search user name' 
                        onChange={handleChange}
                    />
                </form>
            </div>
            <div className="usersWrapper">   
                {
                !hideUsersList ?
                    (scansAllData[page]?.map(scan=>
                        <UserComp 
                            scan={scan} 
                            usersData={usersData} 
                            key={scan.id} 
                        />
                    ))
                :
                    (findUser ? 
                        <UserComp 
                            scan={{...findUser.name, ...findUser.email,...scansData[findUser.id]}} 
                            usersData={usersData} 
                            key={findUser.id} 
                        />
                    :
                        <div className='notFound'>
                            <h3>Not found a user with that name!</h3>
                            <button onClick={()=>setHideUsersList(false)}>Show all users</button>
                        </div>
                    )
                }             
            </div>
            <div className="paginationWrapper">
                {/* if we want search user don't show pagination*/}
                { !hideUsersList &&
                    scansAllData?.map((page,idx)=>
                        <button key={idx} onClick={()=>setPage(idx)}>{idx+1}</button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default HomeUsers
