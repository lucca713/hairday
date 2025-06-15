import dayjs from "dayjs"
import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")
let clientName = document.querySelector("#client")

//data config
const completeData = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = completeData

//data minima
selectedDate.min = completeData

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        //recupera o nome sem espacamento
        let name = clientName.value.trim()
        
        if(!name){
          return alert("Digite o nome do cliente")
        }

        //recupera o horario selecionado
        const hourSelected = document.querySelector(".hour-selected")
        if(!hourSelected){
            return alert("Escolha um horario")
        }

        //recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")
        console.log(hour)

        //insera a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
       
        //gera um id
        const id = new Date().getTime()

        await scheduleNew(
            {
                id,
                name,
                when,
            }
        )

    } catch (error){
        alert("nao foi possivel realizar agendamento")
        console.log(error)
    }
    
}

//dps fazer o jquery