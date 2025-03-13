import React, { useState } from "react";

const App = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "Mark",
            lastName: "Smith",
            age: 25,
            country: "Uzbekistan",
            gender: "male"
        },
        {
            id: 2,
            firstName: "Nata",
            lastName: "Alekseyeva",
            age: 30,
            country: "Russia",
            gender: "female"
        }
    ]);

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        country: "",
        gender: ""
    });

    const [isEditing, setIsEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setUsers(users.map(user => 
                user.id === currentUserId ? { ...user, ...newUser } : user
            ));
            setIsEditing(false);
            setCurrentUserId(null);
        } else {
            setUsers([
                ...users,
                {
                    id: users.length + 1,
                    ...newUser
                }
            ]);
        }
        setNewUser({
            firstName: "",
            lastName: "",
            age: "",
            country: "",
            gender: ""
        });
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }


    const editUser = (id) => {
        const user = users.find(user => user.id === id);
        setNewUser({
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            country: user.country,
            gender: user.gender
        });
        setIsEditing(true);
        setCurrentUserId(id);
    }

    return (
        <div className="container">
            <h1 className="text-center">Users</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        required
                        className="form-control" 
                        placeholder="First name"
                        type="text"
                        name="firstName"
                        value={newUser.firstName}
                        onChange={handleChange}
                    />
                    <input 
                        required
                        className="form-control" 
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                        value={newUser.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        required
                        className="form-control"
                        placeholder="Age"
                        type="number"
                        name="age"
                        value={newUser.age}
                        onChange={handleChange}
                    />
                    <select 
                        className="form-select" 
                        name="country"
                        value={newUser.country}
                        onChange={handleChange}
                    >
                        <option value="" disabled selected>Country</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Russia">Russia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="USA">USA</option>
                        <option value="Germany">Germany</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Mexico">Mexico</option>
                    </select>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="mt-3 d-flex">
                        <label>
                            <input 
                                name="gender" 
                                type="radio" 
                                value="male"
                                checked={newUser.gender === "male"}
                                onChange={handleChange}
                            />
                            Male
                        </label>
                        <label>
                            <input 
                                name="gender" 
                                type="radio" 
                                value="female"
                                checked={newUser.gender === "female"}
                                onChange={handleChange}
                            />
                            Female
                        </label>
                    </div>
                    <button className="btn btn-primary mt-3" type="submit">
                        {isEditing ? "Update User" : "Add User"}
                    </button>
                </div>
            </form>

            <h1 className="text-center mt-3">Users List</h1>
            <table className="table mt-3 table-hover table-bordered">
                <thead>
                    <tr>
                        <th >T/R</th>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Age</th>
                        <th >Country</th>
                        <th >Gender</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <th >{user.id}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                                <td>{user.country}</td>
                                <td>{user.gender}</td>
                                <td className="icons">
                                    <i onClick={() => deleteUser(user.id)} className="bi bi-person-x-fill"></i>
                                    <i onClick={() => editUser(user.id)} className="bi bi-pencil-square"></i>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default App;