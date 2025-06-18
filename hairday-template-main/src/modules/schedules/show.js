import dayjs from "dayjs";

//selecionas as sessoes: manha, tarde e noite

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")


export function schedulesShow({dailySchedules}){
    try{
        //limpo as listas 
        periodMorning.innerHTML = ""
        
        //renderizar agendamentos por periodo
        dailySchedules.array.forEach(element => {
            const item = document.createElement("li")
            const time =  document.createElement("strong")
            const name = document.createElement("span")
            
            //adicionar o id do agendamento
            item.setAttribute("dataid", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")

            name.textContent = schedule.name

        });

    }catch(error){
        console.log(error)
        alert("nao foi possivel mostrar os agendamentos")
    }
}
