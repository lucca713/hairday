//isso para usar api e buscar por dia
import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"
//import { scheduleNew } from "./schedule-new"
export async function scheduleFetchByDay({date}){
    try{
        //fazendo a riquisicao.
    const response = await fetch(`${apiConfig.baseURL}/schedule`)

    //transforma os agendamentos em formato json
    const data = await response.json()

    //filtrar os agendamentos pelo dia seleiconado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day")) //ele retorna true se for do mesmo dia

        return dailySchedules
    }   
    catch(error){
        console.log(error)
        alert("nao foi possivel achar o dia do agendamento ")
    }
}