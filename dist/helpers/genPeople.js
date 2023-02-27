"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPeople = exports.genPhone = exports.genEmail = exports.genAddress = void 0;
const person_1 = require("../data/person");
const type_street_enum_1 = require("../enums/type-street.enum");
const tools_1 = require("./tools");
const genFullName = (arrayName, peopleArray) => {
    let personFirstName;
    let personMiddleName;
    let personLastName;
    do {
        personFirstName = (0, tools_1.getRandomElement)(arrayName);
        personMiddleName = (0, tools_1.getRandomElement)(arrayName);
        personLastName = (0, tools_1.getRandomElement)(person_1.LASTNAMES);
    } while (peopleArray.find(person => person.fullName === `${personFirstName} ${personMiddleName} ${personLastName}` ||
        personFirstName === personMiddleName));
    let fullName = `${personFirstName} ${personMiddleName} ${personLastName}`;
    return fullName;
};
const genAddress = () => {
    let streetType;
    switch ((0, tools_1.randomIntUpTo)(2)) {
        case 0:
            streetType = type_street_enum_1.TypeStreet.avenue;
            break;
        default:
            streetType = type_street_enum_1.TypeStreet.street;
            break;
    }
    let address = `${(0, tools_1.getRandomElement)(person_1.STREETNAMES)}, ${(0, tools_1.randomIntUpTo)(1000)}, ${streetType}`;
    return address;
};
exports.genAddress = genAddress;
const genEmail = (fullName) => {
    let fullNameArray = fullName.split(' ');
    let firstName = fullNameArray[0];
    let lastName = fullNameArray[fullNameArray.length - 1];
    let email = `${(firstName + "." + lastName).toLowerCase()}${(0, tools_1.randomIntUpTo)(100)}@${(0, tools_1.getRandomElement)(person_1.EMAILDOMS)}`;
    return email;
};
exports.genEmail = genEmail;
const genPhone = () => {
    let phone = `+${(0, tools_1.randomIntUpTo)(100000000000)}`;
    return phone;
};
exports.genPhone = genPhone;
const genPersonFromArrayName = (arrayName, peopleArray) => {
    let fullName = genFullName(arrayName, peopleArray);
    const PERSON = {
        // id,
        fullName,
        address: (0, exports.genAddress)(),
        email: (0, exports.genEmail)(fullName),
        phone: (0, exports.genPhone)()
    };
    peopleArray.push(PERSON);
};
const genPeople = (n) => {
    let people = [];
    for (let i = 0; i < n; i++) {
        if ((0, tools_1.randomIntUpTo)(2)) {
            genPersonFromArrayName(person_1.MALENAMES, people);
        }
        else {
            genPersonFromArrayName(person_1.FEMALENAMES, people);
        }
    }
    return people;
};
exports.genPeople = genPeople;
//# sourceMappingURL=genPeople.js.map