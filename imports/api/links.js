import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
    Meteor.publish('links',function() {
        return Links.find({ userId: this.userId });
    });
}

Meteor.methods({
    greetUser(name) {
        console.log('greetUser is running');

        if (!name) {
            throw new Meteor.Error('invalid-arguments','Name is required');
        }

        return `Hello ${name}!`;
    },
    addNumbers(n1,n2) {
        if (!n1 || !n2) {
            throw new Meteor.Error('invalid-arguments','Both numbers are required as arguments');
        }

        if (typeof(n1) === 'number' && typeof(n2) === 'number') {
            throw new Meteor.Error('invalid-arguments','Expecting two numbers.');
        }
    }
});