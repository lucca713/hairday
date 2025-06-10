export function hoursClick(){
    const hours = document.querySelectorAll(".hour-available")
    console.log(hours)

    hours.forEach((available)=>{
        available.addEventListener("click", (selected)=>{
            //tem que entrar no loop de novo varrendo a lista de horas, e remove a class hour-selected no que á esta selecionado
            hours.forEach((hour)=>{
                //remove a classe na li selecionada
                hour.classList.remove("hour-selected")
            })

            //adiciona a classe na li selecionada
            selected.target.classList.add("hour-selected")
        })
    })
}