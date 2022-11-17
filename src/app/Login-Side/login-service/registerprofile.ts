export class RegisterProfile {
    RegisterProfile(email:string,
        password:string,
        firstName:string,
        lastName:string,
        phonNumber:string,
        companyOrPerson:string,
        companyName:string,
        nip:string,
        street:string,
        streetNumber:string,
        postCode:string,
        postTown:string,
        flatNmer:string){
            this.email=email
            this.password=password
            this.firstName=firstName
            this.lastName=lastName
            this.phonNumber=phonNumber
            this.companyOrPerson=companyOrPerson
            this.companyName=companyName
            this.nip=nip
            this.street=street
            this.streetNumber=streetNumber
            this.postCode=postCode
            this.postTown=postTown
            this.firstName=flatNmer
        }
    email!: string
    password!: string
    firstName!: string
    lastName!: string
    phonNumber!: string
    companyOrPerson!: string
    companyName!: string
    nip!: string
    street!: string
    streetNumber!: string
    postCode!: string
    postTown!: string
    flatNumber!: string
}
