import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Second(props) {
    const [show, setShow] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleClose = () => {
        setShow(false);
        setEditMode(false);
        setCurrentUser(null);
    };

    const handleShow = () => setShow(true);

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            id: editMode ? currentUser.id : props.users.length + 1,
            name: e.target.name.value,
            age: e.target.age.value,
            work: e.target.work.value,
        };

        if (editMode) {
            const updatedUsers = props.users.map(u => (u.id === user.id ? user : u));
            props.setUsers(updatedUsers);
        } else {
            props.addUser(user);
        }

        handleClose();
    }

    function deleteUser(id) {
        const updatedUsers = props.users.filter(user => user.id !== id);
        props.setUsers(updatedUsers);
    }

    function editUser(user) {
        setEditMode(true);
        setCurrentUser(user);
        setShow(true);
    }

    return (
        <div className="mt-5">
            <h1 className="text-center text-primary mb-4">Second Page</h1>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-dark btn-lg" onClick={handleShow}>
                    <i className="bi bi-person-plus"></i> Add User
                </button>
            </div>
            <table className="table table-hover table-bordered shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Work</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.work}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm me-2"
                                    onClick={() => deleteUser(user.id)}
                                >
                                    <i className="bi bi-trash"></i> Delete
                                </button>
                                <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() => editUser(user)}
                                >
                                    <i className="bi bi-pencil-square"></i> Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className="bg-primary text-white">
                    <Modal.Title>{editMode ? 'Edit User' : 'Add New User'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                id="name"
                                name="name"
                                placeholder="Enter Name..."
                                type="text"
                                className="form-control"
                                defaultValue={editMode && currentUser ? currentUser.name : ''}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age:</label>
                            <input
                                id="age"
                                name="age"
                                placeholder="Enter Age..."
                                type="number"
                                className="form-control"
                                defaultValue={editMode && currentUser ? currentUser.age : ''}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="work" className="form-label">Work:</label>
                            <input
                                id="work"
                                name="work"
                                placeholder="Enter Work..."
                                type="text"
                                className="form-control"
                                defaultValue={editMode && currentUser ? currentUser.work : ''}
                                required
                            />
                        </div>
                        <div className="text-end">
                            <Button variant="secondary" onClick={handleClose} className="me-2">
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                {editMode ? 'Save Changes' : 'Add User'}
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Second;