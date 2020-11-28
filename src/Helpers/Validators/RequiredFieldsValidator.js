export const requiredFieldValidator = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required.`;
    }
    return null;
};