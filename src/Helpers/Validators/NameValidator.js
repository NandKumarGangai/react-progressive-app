const NAME_REGEX = /[^a-zA-Z -]/;

export const nameValidator = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`;
    }
    if (NAME_REGEX.test(fieldValue)) {
        return 'Invalid characters';
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} needs to be at least three characters`;
    }
    return null;
};
