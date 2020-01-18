import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import TitleModalComponent from './TitleModalComponent';
import ChildrenForm from './ChildrenForm';

export default class ChildrenItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    render() {

        const child = this.props.child;
        const imageSrc = child.gender === "female" ? "assets/images/maria.jpg" : "assets/images/joao.jpg"
        const title = "Edit Child";

        return(
            <div className="col m-3">
                <div className="card p-3">
                    <div className="media">
                        <img className="img" src={imageSrc} alt="child" />
                        <div className="media-body ml-4 align-self-center">
                            <p>{child.name}</p>
                            {/* <p>{child.birthDate.toISOString()}</p> */}
                            <p>{child.birthDate}</p>
                        </div>
                        <div className="col-2 justify-content-end align-self-center" onClick={this.toggleModal}>
                            <i className="fa fa-edit fa-2x"></i>
                        </div>
                        <div className="col-2 justify-content-end align-self-center" onClick={() => console.log(child)}>
                            <i className="fa fa-trash fa-2x"></i>
                        </div>
                    </div>
                </div>
                <Modal isOpen={ this.state.isModalOpen } toggle={ this.toggleModal }>
                    <ModalHeader toggle={ this.toggleModal }>
                        <TitleModalComponent title={ title }/>
                    </ModalHeader>
                    <ModalBody>
                        <ChildrenForm
                            child={ child }
                            handleEditChildren={ this.props.handleEditChildren }
                            handleToggleModal={ this.toggleModal }
                        />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}