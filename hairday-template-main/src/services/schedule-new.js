import { apiConfig } from "./api-config.js"

export async function scheduleNew({id, name, when}){

    try{
        //facoa requisicao para enviar os novos agendamentos
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: 'POST',

            headers:{
                "Content-Type": "application/json"
            },

            body: JSON.stringify({id, name, when}),

        })

        alert("Agendamento Realizado com sucesso")

    }catch(error){
        console.log(error)
        alert("nao foi possivel acessar")
    }

}