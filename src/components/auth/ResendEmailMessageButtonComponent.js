import React from 'react';

function ResendEmailMessageButton(props) {

    return(
        <div>
            <h5>Verifique se recebeu um email de verificação de conta. Caso não tenha recebido, clique no botão abaixo para pedir novo reenvio</h5>
            <div className="btn-warning btn-lg mt-3" onClick={props.handleResendEmail}> Reenviar email </div>  
        </div>
    );
}

export default ResendEmailMessageButton;