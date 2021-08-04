import React,{ useState } from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import './styles/SignupModal.css';

function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="button" onClick={handleOpen} className="navbar__signupBtn">Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal_styles">
                  <h2>Login</h2>
                  <hr />
                  <Button variant="outlined" className="modal_googleBtn"><img src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" style={{height:"12px",marginRight:"10px"}} alt="google-logo"/>Login with Google</Button>
                  <p>New user? <span onClick={handleClose} className="modal__switchBtn">Sign up</span></p>
                </div>
            </Modal> 
        </>
    )
}

export default LoginModal;
