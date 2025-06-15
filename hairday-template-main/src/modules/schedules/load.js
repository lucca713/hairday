import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
//Seleciona a hora do input de data
const selectedDate = document.getElementById("date")

export async function schedulesDays(){

    //buscar na api os agendamentos
    const dailySchecules = await scheduleFetchByDay({date})
  
    console.log(dailySchecules)

    //renderiza as horas disponiveis.
    const date = selectedDate.value
    hoursLoad({date})
}