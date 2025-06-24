import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "./show.js"
//Seleciona a hora do input de data
const selectedDate = document.getElementById("date")

export async function schedulesDays(){
     const date = selectedDate.value
     
    //buscar na api os agendamentos
        const dailySchedules = await scheduleFetchByDay({date})
        
    
    //exibe os agendamentos
        schedulesShow({dailySchedules})



    //renderiza as horas disponiveis.
       

        hoursLoad({date, dailySchedules })
}