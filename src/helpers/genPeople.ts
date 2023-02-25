import { MALENAMES, FEMALENAMES, LASTNAMES, STREETNAMES, EMAILDOMS } from '../data/person';
import { TypeStreet } from '../enums/type-street.enum';
import { IPerson } from '../interfaces/person.interface';
import { getRandomElement, randomIntUpTo } from './tools';


// const genId = (peopleArray: IPerson[]): number => {
//     let idPerson: number = peopleArray.length + 1;
//     return idPerson;
// }

const genFullName = (arrayName: string[], peopleArray: IPerson[]): string => {
    let personFirstName: string;
    let personMiddleName: string;
    let personLastName: string;

    do {
        personFirstName = getRandomElement(arrayName);
        personMiddleName = getRandomElement(arrayName);
        personLastName = getRandomElement(LASTNAMES);
    } while (
        peopleArray.find(person => person.fullName === `${personFirstName} ${personMiddleName} ${personLastName}` ||
            personFirstName === personMiddleName)
    );

    let fullName: string = `${personFirstName} ${personMiddleName} ${personLastName}`
    return fullName
}

export const genAddress = (): string => {
    let streetType: TypeStreet;
    
    switch (randomIntUpTo(2)) {
        case 0:
            streetType = TypeStreet.avenue
            break;
    
        default:
            streetType = TypeStreet.street
            break;
    }
    
    let address: string = `${getRandomElement(STREETNAMES)}, ${randomIntUpTo(1000)}, ${streetType}`
    return address
}

export const genEmail = (fullName: string): string => {
    let fullNameArray: string[] = fullName.split(' ');
    let firstName: string = fullNameArray[0];
    let lastName: string = fullNameArray[fullNameArray.length - 1];
    let email: string = `${(firstName + "." + lastName).toLowerCase()}${randomIntUpTo(100)}@${getRandomElement(EMAILDOMS)}`
    return email
}

export const genPhone = (): string => {
    let phone: string = `+${randomIntUpTo(100000000000)}`
    return phone
}

const genPersonFromArrayName = (arrayName: string[], peopleArray: IPerson[]): void => {
    // let id: number = genId(peopleArray);
    let fullName: string = genFullName(arrayName, peopleArray);

    const PERSON: IPerson = {
        // id,
        fullName,
        address: genAddress(),
        email: genEmail(fullName),
        phone: genPhone()
    };
    peopleArray.push(PERSON);
}

export const genPeople = (n: number): IPerson[] => {
    let people: IPerson[] = [];

    for (let i: number = 0; i < n; i++) {
        if (randomIntUpTo(2)) {
            genPersonFromArrayName(MALENAMES, people);
        }
        else {
            genPersonFromArrayName(FEMALENAMES, people);
        }
    }
    return people;
}


