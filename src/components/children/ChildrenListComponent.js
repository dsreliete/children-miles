import React from 'react';
import ChildrenItem from './ChildrenItem';
import TitleComponent from '../TitleComponent';

export default function ChildrenList(props) {

    const title = "Children";
    const icon = "fa fa-plus-circle fa-2x justify-content-center mx-auto top-right"
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <TitleComponent 
                        title={ title } 
                        icon={ icon } 
                        showHideComponent={ props.showComponent }
                    />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    { props.childrenList.length === 0 ?
                        <p className="text-center">No child added!</p>
                        : 
                        <ul className="list-unstyled">
                            { props.childrenList.map(child => {
                                return (
                                    <li key={ child.id }>
                                        <ChildrenItem
                                            child={ child }
                                            handleEditChildren={ props.handleEditChildren }
                                            handleDeleteChildren={ props.handleDeleteChildren }
                                        />
                                    </li>
                                )})
                            }
                        </ul>
                    }
                </div>   
            </div>
        </>
    );
    
}