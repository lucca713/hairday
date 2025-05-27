//importar os horarios de abertura
import { openingHours } from "../../utils/opening_hours.js"
import dayjs from "dayjs";

const hours = document.getElementById("hours")

export function hoursLoad({ date }){

    const opening = openingHours.map((hours) =>{
        const [scheduleHour] = hours.split(":")
        
        console.log(hours)
        //adicionar a hora nas datas e verificar se esta no passado

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        

        //definir se o horario esta vago
        
        return{
            scheduleHour,
            available : isHourPast,
        }
    })
    console.log(opening)
    opening.forEach(({hour, available})=>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        hours.append(li)
    })
}