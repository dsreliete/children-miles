import React, {useState} from 'react';
import ChildrenList from './ChildrenListComponent';
import ChildrenAddComponent from './ChildrenAddComponent';

const Children = () => {
    const [ childList, setChildList ] = useState([])
    const [ showComp, setShowComp ] = useState(false)

    const handleShowComponent = () => setShowComp(true)
    const handleHideComponent = () => setShowComp(false)
    const handleAddChildrenToList = (child) => {
        child.id = childList.length + 1
        setChildList([...childList, child])
    }
    
    const handleEditChildrenFromList = (editedChild) => {
        const editedList = childList.map(child => (child.id === editedChild.id ? editedChild : child))
        setChildList(editedList)
    }

    const handleDeleteChildrenFromList = (deletedChild) => {
        const editedList = childList.filter(child => child.id !== deletedChild.id)
        setChildList(editedList)
    }
    return(
        <>
        <ChildrenList
                showComponent={ handleShowComponent }
                childrenList={ childList }
                handleEditChildren={ handleEditChildrenFromList }
                handleDeleteChildren={ handleDeleteChildrenFromList }
            />
            { showComp ?
                <ChildrenAddComponent
                    childrenList={ childList }
                    showComponent={ handleShowComponent }
                    hideComponent={ handleHideComponent }
                    handleAddChildrenToList={ handleAddChildrenToList }
                />
                :
                null
            }
        </>
    );
}

export default Children;