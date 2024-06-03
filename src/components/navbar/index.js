import { useNavigate } from 'react-router-dom';
import './index.css'
import { useState } from 'react';


const Navbar = () => {
    const [form, userDetails] = useState(true)
    const navigate = useNavigate()
    const navigateRegidter =() => {
        navigate('/register')
        userDetails(false)
    }

    const navigateFormdetails = () => {
        navigate('/')
        userDetails(true)
    }

    return(
        <div>
            <div className="nav-barsection-container">
                <h3>Marbels Health</h3>
                {form ? <button className='button-19' onClick={navigateRegidter}>
                Register
                </button> : <button className='button-19' onClick={navigateFormdetails}>
                Home
                </button>}
                
            </div>
        </div>
    )
}

export default Navbar;