import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class ProgressSkill extends React.Component {
    render() { 
        const{perecentage,label}=this.props;
        return( 
            <div className='mt-3 d-flex  align-items-center'>
                <span className='col-lg-2 col-3 text-primary'>{label}</span>
                <ProgressBar className='col-lg-10 col-9 ' now={perecentage}/>
            </div>  
        );
    }
}
 
export default ProgressSkill;