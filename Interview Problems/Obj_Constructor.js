// JavaScript Object Constructors

function studentDetails(name, id, semster, dept, mentor) {
    this.firstName = name; // in output, name will not be shown, firstname will be showed. 
    this.id = id;
    this.semster = semster;
    this.dept = dept;
    this.mentor = mentor;
}

const rahim = new studentDetails("Rahim", "1404017", "3rd Year", "CSE", "Prof. Dr. Rashid Ali");
const karim = new studentDetails("Karim", "1404016", "2nd Year", "ME", "Prof. Dr. Matin Ali");
rahim.nationality = "bangladeshi";
karim.nationality = "india";
console.log(rahim);
console.log(karim);

