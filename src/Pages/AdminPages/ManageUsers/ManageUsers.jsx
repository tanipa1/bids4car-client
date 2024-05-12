import React, { useEffect, useState } from 'react';
import ManageUserTable from './ManageUserTable';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
        })
    },[])
    return (
        <div>
            <div className="overflow-x-auto text-black">
                <table className="table">
                    {/* head */}
                    <thead className='text-black'>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>contact</th>
                            <th>Account Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) =>
                            <ManageUserTable
                                key={user._id}
                                index={index}
                                user={user}
                            ></ManageUserTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;