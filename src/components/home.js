import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './css/home.css';

export default function Home() {
    const [userData, setUserData] = useState([]);
    const [dataSize,setDataSize] =useState([]);
    var size = 100;
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://random-data-api.com/api/v2/users?size=${size}&response_type=json`);
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
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((user) => (
                                    <tr key={user?.id}>
                                        <td>
                                            <p>{user.id}</p>
                                        </td>

                                        <td>
                                            <p>{user.first_name}</p>
                                        </td>

                                        <td>
                                            <p>{user.last_name}</p>
                                        </td>

                                        <td>
                                            <p>{user.email}</p>
                                        </td>

                                        <td>
                                            <p>{user.phone_number}</p>
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