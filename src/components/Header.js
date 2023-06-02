import React from 'react';
import './headerSt.css'
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
    render() { 
        return( 
        <div className="headImg container p-5  ">
            <h1>Eman Salah</h1>
            <p>FrontEnd Developer</p>
            
            {/* <Button variant="outline-light">Contact Me</Button>{' '} */}
        </div>
        );
    }
}
 
export default Header;