// Apply for Array [in apply method, when we pass the parameter, it should be given in an array]
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

invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); // Hello Jimmy Baily, How are you?