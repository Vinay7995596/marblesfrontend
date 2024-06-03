import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'

const UpdateForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { patientdetails } = location.state || {};

    const [formDetails, setFormDetails] = useState({
        name: patientdetails.name,
        email: patientdetails.email,
        contact: patientdetails.contact,
        DateOfBirth: patientdetails.DateOfBirth,
        userDescreption: patientdetails.userDescreption,
    });

    const handleChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/formupdate`, formDetails);
            alert('User updated successfully');
            navigate('/');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update User Details</h2>
            <div className="input-namefield">
                <div className='form-register-headings'>
                    <label>
                        Name:
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formDetails.name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='input-namefield'>
                <div className='form-register-headings'>
                    <label>
                        Email:
                    </label>
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formDetails.email}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
            </div>
            <div className='input-namefield'>
                <div className='form-register-headings'>
                    <label>
                        Contact:
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        name="contact"
                        value={formDetails.contact}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='input-namefield'>
                <div className='form-register-headings'>
                    <label>Date Of Birth</label>
                </div>
                <div>
                    <input
                        type="date"
                        name="DateOfBirth"
                        value={formDetails.DateOfBirth}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='input-namefield'>
                <div className='form-register-headings'>
                    <label>
                        Description:
                    </label>
                </div>
                <div>
                    <textarea
                        name="userDescreption"
                        value={formDetails.userDescreption}
                        onChange={handleChange}
                    ></textarea>
                </div>
            </div>
            <div className='update-form-button-container'>
                <button className='button-29' type="submit">Update</button>
            </div>
        </form>
    );
};

export default UpdateForm;
