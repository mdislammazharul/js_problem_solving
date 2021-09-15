// JavaScript Object Constructors

function studentDetails(name, nationality) {
    this.name = name;
    this.nationality = nationality;
    this.home = function () {
        console.log(`${this.name} is a ${this.nationality}`);
    }
}

const rahim = new studentDetails("Rahim", "Bangladeshi");
// const karim = new studentDetails();
// rahim.name = "rahim"
// karim.name = "karim"
// rahim.nationality = "bangladeshi";
// karim.nationality = "india";
// rahim.home = function (name, nationality) {
//     return this.name + ' ' + 'is a' + ' ' + this.nationality;
// }
rahim.home();
// console.log(rahim);
// console.log(karim);

