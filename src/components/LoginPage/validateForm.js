import { requiredFieldValidator } from '../../Helpers/Validators';

export const validate = {
    email: value => requiredFieldValidator('Email', value),
    password: value => requiredFieldValidator('Password', value)
};
