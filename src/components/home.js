import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/home.css';

export default function Home() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:7000/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserData(data);
                //console.log(data);
            } catch (error) {
                console.error(error);
                alert('Failed to fetch user data')
            }
        };
        fetchUserData();
    }, []);
    return (
        <>
            <center>
                <section>
                    <section>
                        <h1>Users List</h1>
                    </section>
                    <section>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <p>{user.name}</p>
                                        </td>

                                        <td>
                                            <p>{user.email}</p>
                                        </td>

                                        <td>
                                            <Link to='/userDetails' state={{id:user.id}}>
                                                <button>
                                                    View full details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </section>
            </center>
        </>
    );
}