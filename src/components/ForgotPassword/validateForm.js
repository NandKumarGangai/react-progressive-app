import {
    emailValidator,
    passwordValidator,
    nameValidator
} from '../../Helpers/Validators';

export const validate = {
    email: emailValidator,
    password: passwordValidator,
    firstName: (name) => nameValidator('First Name', name),
    lastName: (name) => nameValidator('Last Name', name),
    re_password: passwordValidator
};
