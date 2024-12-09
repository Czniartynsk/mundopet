import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    dailySchedules.forEach((schedule) => {
      // Cria o item do agendamento.
      const item = document.createElement("li")
      // Adiciona o id do agendamento.
      item.setAttribute("data-id", schedule.id)

      // Hora do agendamento.
      const time = document.createElement("strong")
      time.textContent = dayjs(schedule.when).format("HH:mm")

      // Nome do pet.
      const petName = document.createElement("strong")
      petName.textContent = schedule.pet

      // Nome do tutor.
      const tutorName = document.createElement("span")
      tutorName.textContent = ` / ${schedule.tutor}`
      tutorName.prepend(petName)
      // Inclui o nome do pet dentro do nome do tutor.

      // Nome do precedimento.
      const procedure = document.createElement("span")
      procedure.textContent = schedule.description

      // Cria botão de remover o agendamento.
      const btnRemove = document.createElement("a")
      btnRemove.setAttribute("href", "#")
      btnRemove.classList.add("cancel-item")
      btnRemove.textContent = "Remover agendamento"

      // Adiciona tudo ao item do agendamento.
      item.append(time, tutorName, procedure, btnRemove)

      // Verifica o horário do agendamento.
      const hour = dayjs(schedule.when).hour()

      if (hour <= 12){
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })
  } catch (error) {
    console.log(error)
    alert("Não foi possível apresentar os agendamentos do dia.")
  }
}