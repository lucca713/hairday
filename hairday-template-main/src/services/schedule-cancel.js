import { apiConfig } from "./api-config";

export async function scheduleCancel({id}) {
    try{
        await fetch(`${apiConfig.baseURL}/schedules/${id}`,{
            method: "DELETE",   
        })

        alert("Agendamento deletado")
    }catch(error){
    console.log(error)
    alert("nao foi possivel achar o id")
    }
}