import { useEffect, useState, useContext } from "react";
import UserService from "../service/UserService";
import {UserContext} from '../helper/Context'
import {useNavigate} from 'react-router-dom'

const UserComponent = (props) => {
    let [users, setUsers] = useState([])
    let [isLoaded, setIsLoaded] = useState(false)
    let navitage = useNavigate()

    let { loggedIn, setLoggedIn, userId, setUserId } = useContext(UserContext)
    if(!loggedIn) navitage("/login")

    useEffect(() => {
        UserService.getUserById(userId)
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
                <h1>{users.firstName} {users.paternalLastName}</h1>
            </div>
        );
    }

    return renderContent();
};

export default UserComponent;
