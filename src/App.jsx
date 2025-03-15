import React, { useState } from "react";
import First from './component/First';
import Second from './component/Second';
import Third from './component/Third';

function App() {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([
        { id: 1, name: 'John', age: 30, work: 'developer' },
        { id: 2, name: 'Jane', age: 25, work: 'designer' },
        { id: 3, name: 'Bob', age: 35, work: 'manager' },
        { id: 4, name: 'Alice', age: 28, work: 'developer' },
        { id: 5, name: 'Charlie', age: 32, work: 'designer' },
        { id: 6, name: 'David', age: 27, work: 'manager' },
    ]);

    function addUser(user) {
        setUsers([...users, user]);
    }

    return (
        <div className="container mt-5">
            <button onClick={() => setPage(1)} className="btn btn-primary me-2 btn-lg">First Page</button>
            <button onClick={() => setPage(2)} className="btn btn-success me-2 btn-lg">Second Page</button>
            <button onClick={() => setPage(3)} className="btn btn-danger btn-lg">Third Page</button>

            {
                page === 1 ? <First /> :
                page === 2 ? <Second addUser={addUser} users={users} setUsers={setUsers} /> :
                <Third users={users} />
            }
        </div>
    );
}

export default App;