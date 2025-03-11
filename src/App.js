import React, { useState } from 'react'; 

// const App = () => {
//     const [person, setPerson] = useState({
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 30,
//         country:{
//             city: {
//                 street: {
//                     name: 'San Francisco'
//                 }
//             }
//         }
//     });
    
//     const changeName = () => {
//         setPerson({
//             ...person, 
//             firstName: 'Jane' 
//         });
//     };

//     const changeStreet = () => {
//         setPerson({
//             ...person,
//             country: {
//                 ...person.country,
//                 city: {
//                    ...person.country.city,
//                     street: {
//                        ...person.country.city.street,
//                         name: 'Turon 2-uy'
//                     }
//                 }
//             }
//         });
//     };

//     return (
//         <div className='container'>
//             <div className='card p-3'>
//                 <h1>Hello, {person.firstName} {person.lastName}!</h1>
//                 <p>Age: {person.age}</p>
//                 <button className='btn btn-success' onClick={changeName}>Change Name</button>
//                 <hr/>
//                 <h2>Street Name: <br/> {person.country.city.street.name}</h2>
//                 <button className='btn btn-danger' onClick={changeStreet}>Change Street Name</button>
//             </div>
//         </div>
//     );
// };

const App = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'John Doe',
            age: 30,
            isMarried: true
        },
        {
            id: 2,
            name: 'Jane Smith',
            age: 28,
            isMarried: false    
        }
    ])

    const addUser = () => {
        users.push({
            id: users.length + 1,
            name: "Mary_" + users.length+1,
            age: users.length + 1,
            isMarried: false
        })
        setUsers([...users])
    }

    const deteleUser = (id) => {
        const updatedUsers = users.filter(user => user.id!== id)
        setUsers([...updatedUsers])
    }

    const editMarried = (id) => {
        const updatedUsers = users.map(user => user.id === id ? 
            {...user, isMarried: !user.isMarried} : user)
        setUsers([...updatedUsers])
    }

    return <div className='container'>
        <button className='btn btn-primary my-3' onClick={addUser}>Add</button>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Is Married</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.isMarried? 'uylangan' : 'uylanmagan'}</td>
                            <td>
                                <button className='btn btn-danger m-2' onClick={()=> deteleUser(user.id)}>Delete</button>
                                <button className='btn btn-primary m-2' onClick={()=> editMarried(user.id)}>Update</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}

export default App;