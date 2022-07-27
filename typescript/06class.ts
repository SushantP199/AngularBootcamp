interface Person {
    name: string;
    showMe(): void;
}

interface MyEmp{
    empCode: number;
}

class Employee implements Person, MyEmp{
    name: string;
    empCode: number;

    constructor(name: string, empCode: number){
        this.name = name;
        this.empCode = empCode;
    }

    showMe(){
        console.log("Heyyy");
    }
}