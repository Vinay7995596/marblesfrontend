import axios from "axios"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"
import './index.css'

const RegistrationForm = () => {
    const navigate = useNavigate()

    const [oldformDetails, newFormDetails] = useState({
        id: uuidv4(),
        name: '',
        email: '',
        contact: '',
        userDescreption: '',
        DateOfBirth: '',
    })

    const valuesOfFields = (e) => {
        const { name, value } = e.target
        newFormDetails({
            ...oldformDetails,
            [name]: value
        });
    }

    const formSubmitted = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/allusers", oldformDetails)
            alert("posted Successfully")
            navigate('/')

        } catch (e) {
            console.log(e, ": not posted, they have error")
            alert('please give correct data.')
        }
    }

    return (
        <div>
            <form className="form-container" onSubmit={formSubmitted}>
                <div className="input-namefield">
                    <div className="form-register-headings">
                        <lable>Name</lable>
                    </div>
                    <div className="inputs-fileds ">
                        <input type="text" name="name" onChange={valuesOfFields} required />
                    </div>
                </div>
                <div className="input-namefield">
                    <div className="form-register-headings">
                        <lable>email</lable>
                    </div>
                    <div className="inputs-fileds ">
                        <input type="email" name="email" onChange={valuesOfFields} required />
                    </div>
                </div>
                <div className="input-namefield">
                    <div className="form-register-headings">
                        <lable>Number</lable>
                    </div>
                    <div className="inputs-fileds ">   
                        <input type="number" name="contact" onChange={valuesOfFields} required />
                    </div>
                </div>
                <div className="input-namefield">
                    <div className="form-register-headings">
                        <lable>date</lable>
                    </div>
                    <div className="inputs-fileds ">
                        <input type="date" name="DateOfBirth" onChange={valuesOfFields} required />
                    </div>
                </div>
                <div className="input-namefield">
                    <div className="form-register-headings">
                        <lable>Descreption</lable>
                    </div>
                    <div className="inputs-fileds ">
                        <textarea name="userDescreption" onChange={valuesOfFields} required></textarea>
                    </div>
                </div>
                <div className="button-container-form-register">
                    <button className="button-24" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm