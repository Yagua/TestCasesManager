import { useEffect, useState } from "react";
import userService from "../service/UserService";

let UserComponent = (props) => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAllUsers()
            .then(users => setUsers(users))
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <h1>us</h1>
    );
};

export default UserComponent;
