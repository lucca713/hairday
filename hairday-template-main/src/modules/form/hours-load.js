//importar os horarios de abertura
import { openingHours } from "../../utils/opening_hours.js"

export function hoursLoad(){
    const opening = openingHours.map((hours) =>{
        console.log(hours)
    } )
}