import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../layout/Loader';
const url = 'https://jsonplaceholder.typicode.com/users';

const Row = ({ user }) => {
    const { id, name, email, website } = user;
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{website}</td>
        </tr>
    )
}

const UsersList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const { data } = await axios.get(url)
        setUsers(data)
    }

    let content = (
        <div className="d-flex justify-content-center align-items-center">
            <Loader/>
        </div>
    )

    if(users.length > 0) {
        content = users.map(user => <Row key={user.id} user={user} />)
    }

    return (
        <div>
            <h2 className="text-center">Users</h2>
            <hr />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                    { content }
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default UsersList
