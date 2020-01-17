import React from 'react';
import ChildrenItem from './ChildrenItem';
import TitleComponent from './TitleComponent';

export default function ChildrenList(props) {

    const title = "Children";
    const icon = "fa fa-plus-circle fa-2x justify-content-center mx-auto top-right"
    return(
        <div className="container-wrapper">
            <div className="row">
                <TitleComponent 
                    title={title} 
                    icon={icon} 
                    showComponent={props.showComponent} 
                />
            </div>
            <div className="row justify-content-center">
                { props.childrenList.length === 0 ?
                    <div className="col-sm-3">
                        <div className="card bg-warning text-center pt-3">
                            <p>No child added!</p>
                        </div>
                    </div>
                    : 
                    <div className="col-sm-6">
                        <ul className="list-unstyled">
                            { props.childrenList.map(child => {
                                return (
                                    <li key={child.id}>
                                        <ChildrenItem child={child} />
                                    </li>
                                )})
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
    
}