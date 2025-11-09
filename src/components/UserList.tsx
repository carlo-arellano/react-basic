import useUsers from "../hooks/use-users";

const UserList = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {/* <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button> */}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            {/* { <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button> 
            </div> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
