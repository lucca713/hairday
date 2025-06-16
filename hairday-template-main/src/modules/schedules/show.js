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
            const time =  document.createElement()
        });

    }catch(error){
        console.log(error)
        alert("nao foi possivel mostrar os agendamentos")
    }
}
