/**
 * Plan de taggage de la microapp
 */
import {McrTagEventModel} from "./mcr-tag-event-mdel";

export class McrTagPlan {

    static readonly DONNEES_ATTRIBUTAIRES_EN_SAVOIR_PLUS: McrTagEventModel = {
        chapitre_1: 'mon_reseau_electrique',
        chapitre_2: 'cartographie_du_reseau',
        chapitre_3: 'donnees_attributaires',
        type: 'action'
    };

    public static display(arg?: McrTagEventModel): void {
        if (arg){
            console.log("--> ",arg);
        }
        console.log("-------------> do think here !! <--------------")
    }
}
