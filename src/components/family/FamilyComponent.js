import React from 'react';
import TitleComponent from '../TitleComponent';
import FamilyForm from './FamilyForm';

const Family = (props) => {

    const title = "Family";
    const iconLeft = "fa fa-users fa-1x mr-3";
    return (
        <div className="container-component">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <TitleComponent title={title} iconLeft={iconLeft}/>
                    <div className="card rounded p-5">
                        <FamilyForm 
                            setFamilyName={ props.setFamilyName }
                        />
                    </div>
                </div> 
            </div>
        </div>
    );

}

export default Family;