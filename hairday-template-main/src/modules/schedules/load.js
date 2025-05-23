import {hoursLoad} from "../form/hours-load.js"

//Seleciona a hora do input de data
const selectedDate = document.getElementById("date")

export function schedulesDays(){
    //renderiza as horas disponiveis.

    const date = selectedDate.value
    hoursLoad(date)
    
}