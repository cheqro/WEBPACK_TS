import Dog from "./dog"

export default class ShalterDog extends Dog{
    constructor(name : string, age:number,private shalter:string) {
        super(name,age);

    }
}
