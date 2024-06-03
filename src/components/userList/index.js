import { useState, useEffect } from "react"
import axios from "axios"
import './index.css'
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const navigate = useNavigate()
    const [users, newUser] = useState([])
    const [olduserDetails, newUserDetails] = useState([])

    useEffect(() => {
        const userDetailsOfAll = async () => {
            try {
                const userData = await axios.get("http://localhost:5000/allusers")
                newUser(userData.data)
            }
            catch (e) {
                console.log(e, ":error in feting table.")
            }
        }

        userDetailsOfAll()
    }, [])

    const toshownDetails = (patientdetails) => {
        newUserDetails(patientdetails)
        navigate('/userdetails', {state : {patientdetails}})
        console.log(olduserDetails)
    }
    return (
        <div>
            <h2 className="heading-main">Users</h2>
            <ul>
                {users.map(values => (
                    <li key={values.email} className="list-main-bg-container">
                        <div className="list-elements">
                            <h3>{values.name}</h3>
                            <button className="button-42" onClick={() => toshownDetails(values)}>View More</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList