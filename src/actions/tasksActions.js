export const updateTask = (payload) => {
    return {
        type: 'UPDATE_TASK',
        payload
    }
};

export const showAlert = (payload) => {
    return {
        type: 'UNVALIDATE_TASK',
        payload
    }
};