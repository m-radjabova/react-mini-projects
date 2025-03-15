import React from 'react'

function Third(props) {
  return (
    <div className='mt-3'>
        <h1>Third Page</h1>

        <ul className="list-group">
            {
                props.users.map(user => (
                    <li className="list-group-item" key={user.id}>
                        {user.id} . {user.name} - {user.work}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Third