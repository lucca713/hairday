import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDays } from "./load"

const period = document.querySelectorAll(".period")

//gerar event click para cada lista - manha - tarde e noite

period.forEach((period)=>{
    //capturar evento de click

    period.addEventListener("click", async (event) =>{
        const cancelar = event.target.classList.contains("cancel-icon")
        if(cancelar == true){
            const item = event.target.closest("li")
            const {id} = item.dataset

            await scheduleCancel({id})
            schedulesDays()

        }
    })
})
