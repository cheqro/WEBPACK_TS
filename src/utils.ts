import _ from "lodash";

export function add(a:number, b:number):number{
    return a+b;
}


export default (array : number[], predicate: (n : number)=>number) : number[][] => {
    console.log("hello from default !!!!!!!!!!!! partition !!!!!")
    return _.partition(array, predicate);
}
