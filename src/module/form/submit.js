import dayjs from "dayjs"

const form = document.querySelector("form")
const tutorInput = document.getElementById("tutor")
const petInput = document.getElementById("pet")
const phoneInput = document.getElementById("phone")
const descriptionInput = document.getElementById("description")
const scheduleDateInput = document.getElementById("schedule-date")
const scheduleHourInput = document.getElementById("schedule-hour")

form.onsubmit = (event) => {
  event.preventDefault()

  const id = new Date().getTime()

  const tutor = tutorInput.value
  const pet = petInput.value
  const phone = phoneInput.value
  const description = descriptionInput.value
  const scheduleDate = scheduleDateInput.value
  const scheduleHour = scheduleHourInput.value

  // Pega os valores de hora e minuto separadamente.
  const [hour, minute] = scheduleHour.split(":")
  // Cria o objeto da data.
  const when = dayjs(scheduleDate).add(hour, "hour").add(minute, "minute")

  console.log({
    id, 
    tutor,
    pet,
    phone,
    description,
    when,
  })
}