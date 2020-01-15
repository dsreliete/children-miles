import React, {Component} from 'react';
import ChildrenItem from './ChildrenItem';
import TitleComponent from './TitleComponent';

export default class ChildrenList extends Component {

    render() {
        const title = "Children";
        const icon = "fa fa-plus-circle fa-2x justify-content-center mx-auto top-right"
        return(
            <div className="container-wrapper">
                <div className="row">
                    <TitleComponent 
                        title={title} 
                        icon={icon} 
                        showAddComponent={this.props.showAddComponent} 
                    />
                </div>
                <div className="row justify-content-center">
                    { this.props.childrenList.length === 0 ?
                        <div className="col-4 m-3">
                            <div className="card p-4 text-center">
                                <h4>No child added!</h4>
                            </div>
                        </div>
                        : 
                        <ul className="list-unstyled">
                            { this.props.childrenList.map(child => {
                                return (
                                    <li key={child.id}>
                                        <ChildrenItem child={child} />
                                    </li>
                                )})
                            }
                        </ul>
                    }
                </div>
            </div>
        );
    }
}