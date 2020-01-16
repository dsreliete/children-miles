import React, {Component} from 'react';

export default class TitleComponent extends Component {

    render(){
        return (
            <div className="col-sm-12 title-container">
                <h3><i className="fa fa-user fa-1x mr-3"></i>{this.props.title}</h3>
                <i className={this.props.icon} onClick={this.props.showAddComponent}></i>
                <hr/>
            </div>
            
        );
    }
}