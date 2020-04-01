import React from 'react';

function ResendEmailMessageButton(props) {

    return(
        <div>
            <h5>{props.message}</h5>
            <div className="btn-warning btn-lg mt-3" onClick={props.handleResendEmail}> Reenviar email </div>  
        </div>
    );
}

export default ResendEmailMessageButton;