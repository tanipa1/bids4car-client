import React from 'react';
import Swal from 'sweetalert2';

const ManageUserTable = ({ user, index }) => {
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure want delete the account?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            window.location.reload();
                            Swal.fire(
                                'Deleted!',
                                `User account has been removed.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user?.photo} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{user.name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {user.email}
                    <br />
                    <span className="badge badge-ghost badge-sm text-white">+{user.telephone}</span>
                </td>
                <td>{user.accountType}</td>
                <th>
                    {user.accountType === "Admin" ? <></> : <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" /></svg>
                    </button>}
                </th>
            </tr>
        </tbody>
    );
};

export default ManageUserTable;