import dayjs from "dayjs"


const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

//data config
const completeData = dayjs(new Date()).format("YYYY-MM-DD")

//carrega a data atual
selectedDate.value = completeData

//data minima
selectedDate.min = completeData

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("enviado")
}

//dps fazer o jquery