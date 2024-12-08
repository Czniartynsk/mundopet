import dayjs from "dayjs"
import { schedulesDay } from "./schedules/load.js"
import { hoursLoad } from "../module/form/hours-load.js"

const newSchedule = document.getElementById("new-schedule")
const modal = document.querySelector(".modal")
const form = document.querySelector("form")
const scheduleDate = document.getElementById("schedule-date")
const selectedDate = document.getElementById("date")

// Guarda data do dia atual.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Quando alterada a data no formulário, verifica se o horário está disponível.
scheduleDate.addEventListener("change", function() {
  const date = scheduleDate.value 
  
  hoursLoad({ date })
})

document.addEventListener("DOMContentLoaded", () => {
  schedulesDay()
})

// Seta dia atual como data mínima para agendamento.
scheduleDate.min = inputToday
selectedDate.min = inputToday

// Inputa o dia atual na agenda, para abrir na data atual.
selectedDate.value = inputToday

// Reconhece clique no botão de novo agendamento, chama o modal.
newSchedule.addEventListener("click", () => {
  modal.classList.add("fade-inModal")
  modal.classList.remove("fade-outModal")
  
  form.classList.add("fade-in")
  form.classList.remove("fade-out")

  // Quando formulário abre, trás a data em que a agenda está posicionada.
  scheduleDate.value = selectedDate.value
})

// Verifica clique no modal.
modal.addEventListener("click", function (event) {
  // Se o clique foi for do formulário, esconde o modal.
  if(!event.target.closest("form")){
    modal.classList.add("fade-outModal")
    modal.classList.remove("fade-inModal")

    form.classList.add("fade-out")
    form.classList.remove("fade-in")
  }
})