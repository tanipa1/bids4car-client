import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageRidesharers = () => {
    const [ridesharers, setRidesharers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ridesharers')
            .then(res => res.json())
            .then(data => {
                setRidesharers(data);
            })
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure want delete the shop?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/ridesharers/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            window.location.reload();
                            Swal.fire(
                                'Deleted!',
                                `Ridesharer has been removed.`,
                                'success'
                            )
                        }
                    })
            }
        })
    };

    const handleApprove = id => {
        fetch(`http://localhost:5000/ridesharers/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    toast.success('Ridesharer is now Approved!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",

                    });
                    window.location.reload()
                }
            })
    }

    return (
        <div className='text-black'>
            {ridesharers.map(ridesharer =>
                <div className="flex shadow-xl pr-10 justify-between gap-8 items-center" key={ridesharer._id}>
                    <div>
                        <img className="w-[200px]" src={ridesharer.image} alt="" />
                    </div>
                    <div className="">
                        <h1 className="font-bold text-lg">{ridesharer.name}</h1>
                        <p ><span className='font-bold'>Driving License Number :</span> {ridesharer.license}</p>
                        <p className="flex items-center gap-1">
                        <span className='font-bold'>Car Registration Number :</span> {ridesharer.car_reg}
                        </p>
                        <p className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.045 15.045 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z" />
                        </svg> +{ridesharer.number}</p>
                    </div>
                    <div className="grid gap-2 ml-24 justify-end">
                        {ridesharer.status === true ?
                            <p className="flex items-center gap-1 font-semibold">Approved
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                    <defs><mask id="ipTCheckOne0"><g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4"><path fill="#555" d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z" /><path strokeLinecap="round" d="m16 24l6 6l12-12" /></g></mask></defs><path fill="green" d="M0 0h48v48H0z" mask="url(#ipTCheckOne0)" />
                                </svg>
                            </p> :
                            <button onClick={() => handleApprove(ridesharer._id)} className="flex items-center btn-sm btn btn-outline border-green-700 text-green-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="green" fillRule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clipRule="evenodd" />
                                </svg>
                                Approve</button>
                        }
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />

                        <button onClick={() => handleDelete(ridesharer._id)} className="flex items-center btn-sm btn btn-outline border-red-500 text-red-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="red" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z" />
                            </svg>
                            Remove</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageRidesharers;