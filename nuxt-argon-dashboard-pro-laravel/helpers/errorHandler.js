export const isError = (item, errors) => {
    if (errors.value) {
        const error = errors.value.find(error => error.$property === item);

        if (error) {
            return true;
        }
    }

    return false;
}

export const getErrorMessage = (item, errors) => {
    if (errors.value) {
        const error = errors.value.find(error => error.$property === item);

        return error?.$message;
    }
    return null;
}

export const checkItemExist = (itemName, itemsList, currentItemName) => {
    if(itemName === currentItemName) return false;
    
    const item = itemsList.find(item => item.name.toLowerCase() === itemName.toLowerCase());

    if (item) return true;

    return false;
}
