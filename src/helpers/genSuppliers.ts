import { MALENAMES, FEMALENAMES, LASTNAMES } from '../data/person';
import { ISupplier } from '../interfaces/person.interface';
import { genAddress, genEmail, genPhone } from './genPeople';
import { getRandomElement, randomIntUpTo } from './tools';

const genFullName = (arrayName: string[], peopleArray: ISupplier[]): string => {
    let personFirstName: string;
    let personMiddleName: string;
    let personLastName: string;

    do {
        personFirstName = getRandomElement(arrayName);
        personMiddleName = getRandomElement(arrayName);
        personLastName = getRandomElement(LASTNAMES);
    } while (
        peopleArray.find(person => person.supplierName === `${personFirstName} ${personMiddleName} ${personLastName}` ||
            personFirstName === personMiddleName)
    );

    let fullName: string = `${personFirstName} ${personMiddleName} ${personLastName}`
    return fullName
}


const genSupplierFromArrayName = (arrayName: string[], peopleArray: ISupplier[]): void => {
    // let id: number = genId(peopleArray);
    let supplierName: string = genFullName(arrayName, peopleArray);

    const PERSON: ISupplier = {
        // id,
        supplierName,
        address: genAddress(),
        email: genEmail(supplierName),
        phone: genPhone()
    };
    peopleArray.push(PERSON);
}

export const genSuppliers = (n: number): ISupplier[] => {
    let suppliers: ISupplier[] = [];

    for (let i: number = 0; i < n; i++) {
        if (randomIntUpTo(2)) {
            genSupplierFromArrayName(MALENAMES, suppliers);
        }
        else {
            genSupplierFromArrayName(FEMALENAMES, suppliers);
        }
    }
    return suppliers;
}


