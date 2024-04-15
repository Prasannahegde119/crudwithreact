import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './userReducer';

function Home() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch(); // Initialize dispatch

    const handleDelete = (userId) => {
        dispatch(deleteUser(userId)); 
    };

    return (
        <div className='Container'>
            <h2>Crud app with server</h2>
            <Link to='/Create' className='btn btn-success my-3'>Create +</Link>

            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/Update/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
