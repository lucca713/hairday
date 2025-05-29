//importar os horarios de abertura
import { openingHours } from "../../utils/opening_hours.js"
import dayjs from "dayjs";

const hours = document.getElementById("hours")

export function hoursLoad({ date }){

    const opening = openingHours.map((hour) =>{
    
        const [scheduleHour] = hour.split(":") //quebra a list ade horas no : 
        
        
        //devolve um bool para cada hora de acordo com o relogio
        const isHourFuture = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        

        //definir se o horario esta vago
        return{   
            hour,
            available : isHourFuture,
        }
    })
    //console.log(opening)
    opening.forEach(({hour, available})=>{
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        } else if(hour === "13:00"){
            hourHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })
}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header) // se der bo é aqui nas horas 
}