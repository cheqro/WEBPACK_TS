import Dog from "./dog"
import {add} from "./utils";
import _ from "lodash";
const $ = require("jquery")

import ShalterDog from "./ShalterDog";
import {McrTagPlan} from "../TagPlan";
console.log("hello from index file !!!!")

const eltine : Dog = new Dog("eltine", 2);

eltine.bark()
// console.log(add(1,2))

const bafi : ShalterDog = new ShalterDog("bafi", 3, "wooo");
// console.log(bafi);
// console.log(_)
// console.log(_.partition([1, 2, 3, 4], n => n % 2));

/*$( "div" ).click(function() {
    var color = $( this ).css( "background-color" );
    console.log(color);
};*/



// $(document).ready(() => {
//     console.log($("#div").css("background-color"))
//
//     $("#div").css("background-color", "red")
//     console.log($("#div").css("background-color"))
// });
//
// let divv =  document.getElementById("div");
//     console.log(divv);

/*

$(document).ready(function(){

    $("button").click(function(){


        let bg= $("#div1").css("background-color");
        if (bg === "rgb(127, 255, 212)"){
            $("#div1").css("background-color", "red")
        }
        if(bg === "rgb(255, 0, 0)"){
            $("#div1").css("background-color", "black")
        }

        if(bg === "rgb(0, 0, 0)"){
            $("#div1").css("background-color", "red")
        }
        console.log("clicked!", bg)

    });

});*/

export let message = "Message...!";



McrTagPlan.display();

console.log("......................................")
console.log("......................................")
console.log("......................................")
console.log("......................................")
console.log("......................................")
McrTagPlan.display(McrTagPlan.DONNEES_ATTRIBUTAIRES_EN_SAVOIR_PLUS);
McrTagPlan.DONNEES_ATTRIBUTAIRES_EN_SAVOIR_PLUS.page="page...."
McrTagPlan.display(McrTagPlan.DONNEES_ATTRIBUTAIRES_EN_SAVOIR_PLUS);
