import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const tutorInput = document.getElementById("tutor")
const petInput = document.getElementById("pet")
const phoneInput = document.getElementById("phone")
const descriptionInput = document.getElementById("description")
const scheduleDateInput = document.getElementById("schedule-date")
const scheduleHourInput = document.getElementById("schedule-hour")

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const id = new Date().getTime()

    const tutor = tutorInput.value
    const pet = petInput.value
    const phone = phoneInput.value
    const description = descriptionInput.value
    const scheduleDate = scheduleDateInput.value
    const scheduleHour = scheduleHourInput.value

    if (!tutor) {
      return alert("Informe o nome do cliente!")
    }
    if (!pet) {
      return alert("Informe o nome do pet!")
    }
    if (!phone) {
      return alert("Informe o telefone do cliente!")
    }
    if (!description) {
      return alert("Informe o serviço!")
    }
    if (!scheduleDate) {
      return alert("Informe a data do agendamento!")
    }
    if (!scheduleHour) {
      return alert("Informe a hora do agendamento!")
    }

    // Pega os valores de hora e minuto separadamente.
    const [hour, minute] = scheduleHour.split(":")
    // Cria o objeto da data.
    const when = dayjs(scheduleDate).add(hour, "hour").add(minute, "minute")

    await scheduleNew({
      id, 
      tutor,
      pet,
      phone,
      description,
      when
    })

    tutorInput.value = ""
    petInput.value = ""
    phoneInput.value = ""
    descriptionInput.value = ""
    scheduleDateInput.value = ""
    scheduleHourInput.value = ""

    await schedulesDay()
  } catch (error) {
    console.log(error)
    alert("Não foi possível realizar o agendamento.")
  }
}