import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) => { 
    const email    = user.emails[0].address,
          password = user.password;
    try {
        new SimpleSchema({
            email: {
                type: String,
                regEx: SimpleSchema.RegEx.Email
            }
        }).validate({ email, password });
    } catch (e) {
        throw new Meteor.Error(400, 'Please enter a valid email');
    }

    console.log('this is the user',user);
    return true;
});