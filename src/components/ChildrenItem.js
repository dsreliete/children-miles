import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import TitleModalComponent from './TitleModalComponent';
import ChildrenForm from './ChildrenForm';

const ChildrenItem = props => {

    const [isModalOpen , setIsModalOpen] = useState(false)
    const [editRow , setEditRow] = useState(false)
    
    const toggleModal = () => {
        const modal = !isModalOpen
        setEditRow(true)
        setIsModalOpen(modal)
    }

    const handleDeleteChild = (child) => {
        props.handleDeleteChildren(child)
    }
    
    const child = props.child;
    const imageSrc = child.gender === "female" ? "assets/images/maria.jpg" : "assets/images/joao.jpg"
    const title = "Edit Child";

    return(
        <div className="col m-3">
            <div className="card p-3">
                <div className="media">
                    <img className="img" src={ imageSrc } alt="child" />
                    <div className="media-body ml-4 align-self-center">
                        <p>{ child.name }</p>
                        <p>{ child.birthDate.toISOString() }</p>
                    </div>
                    <div className="col-2 justify-content-end align-self-center" onClick={ toggleModal }>
                        <i className="fa fa-edit fa-2x"></i>
                    </div>
                    <div className="col-2 justify-content-end align-self-center" onClick={ () => handleDeleteChild(child) }>
                        <i className="fa fa-trash fa-2x"></i>
                    </div>
                </div>
            </div>
            <Modal isOpen={ isModalOpen } toggle={ toggleModal }>
                <ModalHeader toggle={ toggleModal }>
                    <TitleModalComponent title={ title }/>
                </ModalHeader>
                <ModalBody>
                    <ChildrenForm
                        editRow={ editRow }
                        child={ child }
                        handleEditChildren={ props.handleEditChildren }
                        handleToggleModal={ toggleModal }
                    />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ChildrenItem;
