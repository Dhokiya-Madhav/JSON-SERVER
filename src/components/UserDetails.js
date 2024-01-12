import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function UserDetails(){

    const location = useLocation();
    const [userDetails,setUserDetails] = useState()
    const id = location.state.id;
    useEffect( () => {
            console.log(location.state.id);
            try {
                const response =  fetch('http://localhost:7000/users/'+id);
                if (!response.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const data =  response.json();
                setUserDetails(data);
                console.log(data);
            } catch (error) {
                console.error(error);
                //alert('Failed to fetch user details')
            }
    }, []);
    return(
        <div>Hello</div>
    );
}