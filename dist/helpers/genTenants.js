"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genTenants = void 0;
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
    } while (peopleArray.find(person => person.tenantName === `${personFirstName} ${personMiddleName} ${personLastName}` ||
        personFirstName === personMiddleName));
    let fullName = `${personFirstName} ${personMiddleName} ${personLastName}`;
    return fullName;
};
const genTenantFromArrayName = (arrayName, peopleArray) => {
    let tenantName = genFullName(arrayName, peopleArray);
    const PERSON = {
        tenantName,
        address: (0, genPeople_1.genAddress)()
    };
    peopleArray.push(PERSON);
};
const genTenants = (n) => {
    let tenants = [];
    for (let i = 0; i < n; i++) {
        if ((0, tools_1.randomIntUpTo)(2)) {
            genTenantFromArrayName(person_1.MALENAMES, tenants);
        }
        else {
            genTenantFromArrayName(person_1.FEMALENAMES, tenants);
        }
    }
    return tenants;
};
exports.genTenants = genTenants;
//# sourceMappingURL=genTenants.js.map