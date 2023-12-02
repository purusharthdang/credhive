import { faker } from '@faker-js/faker';

export const getCompanyData = () => {

    return Array.from(Array(25)).map(() => {
        return {
            companyName: faker.company.name(),
            address: faker.person.jobArea(),
            registrationDate: faker.date.recent(),
            numberOfEmployees: faker.number.int({ min: 1, max: 1000 }),
            raisedCapital: faker.number.int({ min: 100, max: 1000 }),
            turnover: faker.number.int({ min: 100, max: 1000 }),
            netProfite: faker.number.int({ min: 100, max: 1000 }),
            contactNumber: faker.phone.number(),
            contactEmail: faker.internet.email(),
            companyWebsite: faker.internet.url(),
            loanAmount: faker.number.int({ min: 100, max: 1000 }),
            loanInterest: faker.number.int({ max: 25 }),
            accountStatus: faker.datatype.boolean(),
            logo: faker.image.avatar()
        }
    })
}