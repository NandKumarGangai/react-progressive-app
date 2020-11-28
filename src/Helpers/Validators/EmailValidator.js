const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const emailValidator = (email) => {
    if (EMAIL_REGEX.test(email)) {
        return null;
    }
    if (email.trim() === '') {
        return 'Email is required';
    }
    return 'Please enter a valid email';
};
