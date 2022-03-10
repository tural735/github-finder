import React, { useLayoutEffect, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function UserResult() {
    const {users,loading,fetchUsers}=useContext(GithubContext);
    // const [loading,setLoading]=useState(true);
    useLayoutEffect(()=>{
        fetchUsers();
    },)

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user,index)=>(
                    <UserItem key={index} user={user}/>
                ))}
            </div>
        )
    }else{
        return(
            <Spinner/>
        )
    }
  
}

export default UserResult