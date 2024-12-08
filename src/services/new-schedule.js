// import { apiConfig } from "./api-config.js"

// // Entre o objeto, desestrutura as informações necessárias.
// export async function scheduleNew({ id, name, when }) {
//   try {
//     await fetch(`${apiConfig}/schedules`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id, name, when }),
//     })

//     alert("Agendamento realizado com sucesso!")
//   } catch (error) {
//     console.log(error)
//     alert("Não foi possível agendar, tente novamente mais tarde.")
//   }
// }
