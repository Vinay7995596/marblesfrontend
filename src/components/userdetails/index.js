import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'

const UserDetails = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { patientdetails } = location.state || {};
    const deletedOfUser = async () => {
        try {
            await axios.delete(`http://localhost:5000/deleted/${patientdetails.email}`)
            alert('deleted succesfully')
            navigate('/')

        } catch (e) {
            console.log(e, ": error in deleting")
        }
    }

    const updateForm = () => {
        navigate('/formupdate', { state: { patientdetails } });
    }

    const backToHome = () => {
        navigate('/')
    }

    return (
        <div>
            <h2 className='user-details-main-heading-2'>User Details of {patientdetails.name}</h2>
            {patientdetails ? (
                <div>
                    <div className="input-namefield-2">
                        <div className="form-register-headings">
                            <h4>Name</h4>
                        </div>
                        <div>
                            {patientdetails.name}
                        </div>
                    </div>
                    <div className="input-namefield-2">
                        <div className="form-register-headings">
                            <h4>Email</h4>
                        </div>
                        <div>
                            {patientdetails.email}
                        </div>
                    </div>
                    <div className="input-namefield-2">
                        <div className="form-register-headings">
                            <h4>Number</h4>
                        </div>
                        <div>
                            {patientdetails.contact}
                        </div>
                    </div>
                    <div className="input-namefield-2">
                        <div className="form-register-headings">
                            <h4>Date Of Birth</h4>
                        </div>
                        <div>
                            {patientdetails.DateOfBirth}
                        </div>
                    </div>
                    <div className="input-namefield-2">
                        <div className="form-register-headings">
                            <h4>Desrception</h4>
                        </div>
                        <div>
                            {patientdetails.userDescreption}
                        </div>
                    </div>
                    <div className='buttons-list-container'>
                        <button className='button-24' onClick={updateForm}>Update</button>
                        <button className='button-24' onClick={deletedOfUser}>Delete</button>
                        <button className='button-24' onClick={backToHome}>Back</button>
                    </div>
                </div>
            ) : (
                <p>No user details available.</p>
            )}
        </div>
    );
};

export default UserDetails;
