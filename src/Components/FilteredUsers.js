import React from 'react'

function FilteredUsers({UserList}) {

    const filteredUsers = UserList.filter(user => user.name.startsWith('A'));

  return (
    <div>
      <h2>Users' Names starting with letter "A":</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default FilteredUsers