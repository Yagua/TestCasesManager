import { useEffect, useState } from "react";
import UserService from "../service/UserService";

const UserComponent = (props) => {
    let [users, setUsers] = useState([])
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        UserService.getAllUsers()
            .then(users => {
                setUsers(users);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    const renderContent = () => {
        if(!isLoaded) return (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        );
        return (
            <div className = "container" >
                <h1>{users[0].firstName} {users[0].paternalLastName}</h1>
            </div>
        );
    }

    return renderContent();
};

export default UserComponent;
