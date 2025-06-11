import {schedulesDays} from "../schedules/load"
const selectedDate = document.getElementById("date")


//recarrega a lista de horarios quando o dia muda
selectedDate.onchange = () => schedulesDays()
