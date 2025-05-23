//importar os horarios de abertura
import { openingHours } from "../../utils/opening_hours.js"
import dayjs from "dayjs";

export function hoursLoad({ date }){

    const opening = openingHours.map((hours) =>{
        const [scheduleHour] = hours.split(":")
        

        //adicionar a hora nas datas e verificar se esta no passado

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        

        //definir se o horario esta vago

        

        return{
            scheduleHour,
            available : isHourPast,
        }
    })

    console.log(opening)
}