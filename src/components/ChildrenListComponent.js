import React from 'react';
import ChildrenItem from './ChildrenItem';

export default function ChildrenList({childrenList}) {
    if (childrenList) {
        return(
            <div className="container-wrapper">
                <div className="row justify-content-center">
                    <ul className="list-unstyled">
                        {childrenList.map(child => {
                            return <ChildrenItem child={child} />
                        })}
                    </ul>
                </div>
            </div>
        );
    }
    return <div></div>
}