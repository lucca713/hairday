export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available')
    console.log(hours)

    hours.forEach((available)=>{
        available.addEventListener("click", (selected)=>{
            hours.forEach((hour)=>{
                hour.classList.remove('hour-available')
            })

            selected.target.classList.add('hour-available')
        })
    })
}