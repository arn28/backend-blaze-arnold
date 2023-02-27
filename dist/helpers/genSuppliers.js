"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSuppliers = void 0;
const person_1 = require("../data/person");
const genPeople_1 = require("./genPeople");
const tools_1 = require("./tools");
const genFullName = (arrayName, peopleArray) => {
    let personFirstName;
    let personMiddleName;
    let personLastName;
    do {
        personFirstName = (0, tools_1.getRandomElement)(arrayName);
        personMiddleName = (0, tools_1.getRandomElement)(arrayName);
        personLastName = (0, tools_1.getRandomElement)(person_1.LASTNAMES);
    } while (peopleArray.find(person => person.supplierName === `${personFirstName} ${personMiddleName} ${personLastName}` ||
        personFirstName === personMiddleName));
    let fullName = `${personFirstName} ${personMiddleName} ${personLastName}`;
    return fullName;
};
const genSupplierFromArrayName = (arrayName, peopleArray) => {
    let supplierName = genFullName(arrayName, peopleArray);
    const PERSON = {
        supplierName,
        address: (0, genPeople_1.genAddress)(),
        email: (0, genPeople_1.genEmail)(supplierName),
        phone: (0, genPeople_1.genPhone)()
    };
    peopleArray.push(PERSON);
};
const genSuppliers = (n) => {
    let suppliers = [];
    for (let i = 0; i < n; i++) {
        if ((0, tools_1.randomIntUpTo)(2)) {
            genSupplierFromArrayName(person_1.MALENAMES, suppliers);
        }
        else {
            genSupplierFromArrayName(person_1.FEMALENAMES, suppliers);
        }
    }
    return suppliers;
};
exports.genSuppliers = genSuppliers;
//# sourceMappingURL=genSuppliers.js.map