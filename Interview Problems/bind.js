// In bind method, we have to use another variable for the arguments or to pass the arguments. this variable works like a function. We have to call the variable later.
var employee1 = {
    firstName: 'John',
    lastName: 'Rodson'
};
var employee2 = {
    firstName: 'Jimmy',
    lastName: 'Baily'
};

function invite(greeting1, greeting2) {
    console.log(`${greeting1}! ${this.firstName} ${this.lastName}, ${greeting2}`);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?