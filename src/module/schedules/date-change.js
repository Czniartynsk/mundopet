import { schedulesDay } from "./load.js"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()