// initializes the redux store with the objArray from 'fields' in Cardlist.js
export const firstState = initalArray => {
    return {
        type: 'MAPPED_VALUE',
        payload: initalArray
    };
};

// updates entries[id] in the redux store based on the option clicked
export const dropdownUpdate = dropObj => {
    return {
        type: 'DROPDOWN_UPDATE',
        payload: dropObj
    }
};

// adds the date format selected to the redux store

export const formatDate = chosenObj => {
    return {
        type: 'CHOOSE_FORMAT',
        payload: chosenObj
    }
};

export const one2one = obj => {
    return {
        type: 'ADD_ONE_2_ONE',
        payload: obj
    }
}

export const century = obj => {
    return {
        type: 'CENTURY',
        payload: obj
    }
}

export const removeContent = obj => {
    return {
        type: "REMOVE_SELECTION",
        payload: obj
    }
}