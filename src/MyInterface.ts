interface Interface {
    name: string;
    surname: string;
    age?:number ;
    address: string;
    phone: string;
}
interface Data extends Interface {
    occupation: string;
    salary: number;
}

const person: Data = {
    name: "Dan",
    surname: "Ticlenco",
    address: "Chisinau",
    phone: "000666777888",
    occupation: "Student",
    salary: 0
};

console.log(person)