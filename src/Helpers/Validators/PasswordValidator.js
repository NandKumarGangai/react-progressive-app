const REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

export const passwordValidator = (password) => {
    if (REGEX_PASSWORD.test(password)) {
        return null;
    }
    if (password.trim() === '') {
        return 'password is required';
    }
    if (password.length < 7) {
        return 'Please enter alteast 7 characters.';
    }
    return 'Password should contain atleast one capital, small letter, number and special character.';
};
