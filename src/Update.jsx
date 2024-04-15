import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './userReducer';

function Update() {
    const { id } = useParams(); // Get the user id from URL parameter
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Fetch user details based on id
        const user = users.find(user => user.id === parseInt(id));
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [id, users]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: parseInt(id), name, email }));
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}

export default Update;
