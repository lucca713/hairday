import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

//data config
const todarData = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = todarData

//data minima
selectedDate.min = todarData

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("enviado")
}