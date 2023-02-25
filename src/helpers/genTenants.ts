import { MALENAMES, FEMALENAMES, LASTNAMES } from '../data/person';
import { ITenant } from '../interfaces/person.interface';
import { genAddress, genEmail, genPhone } from './genPeople';
import { getRandomElement, randomIntUpTo } from './tools';

const genFullName = (arrayName: string[], peopleArray: ITenant[]): string => {
    let personFirstName: string;
    let personMiddleName: string;
    let personLastName: string;

    do {
        personFirstName = getRandomElement(arrayName);
        personMiddleName = getRandomElement(arrayName);
        personLastName = getRandomElement(LASTNAMES);
    } while (
        peopleArray.find(person => person.tenantName === `${personFirstName} ${personMiddleName} ${personLastName}` ||
            personFirstName === personMiddleName)
    );

    let fullName: string = `${personFirstName} ${personMiddleName} ${personLastName}`
    return fullName
}


const genTenantFromArrayName = (arrayName: string[], peopleArray: ITenant[]): void => {
    let tenantName: string = genFullName(arrayName, peopleArray);

    const PERSON: ITenant = {
        tenantName,
        address: genAddress()
    };
    peopleArray.push(PERSON);
}

export const genTenants = (n: number): ITenant[] => {
    let tenants: ITenant[] = [];

    for (let i: number = 0; i < n; i++) {
        if (randomIntUpTo(2)) {
            genTenantFromArrayName(MALENAMES, tenants);
        }
        else {
            genTenantFromArrayName(FEMALENAMES, tenants);
        }
    }
    return tenants;
}


