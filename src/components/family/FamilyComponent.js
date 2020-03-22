import React from 'react';
import TitleComponent from '../TitleComponent';
import FamilyForm from './FamilyForm';

const Family = (props) => {

    const title = "Family";
    return (
        <div className="container-wrapper">
            <div className="row">
                <TitleComponent title={title}/>
                    <div className="col mt-3">
                        <FamilyForm 
                            setFamilyName={ props.setFamilyName }
                        />
                    </div> 
            </div>
        </div>
    );

}

export default Family;