import { scheduleSearchByDay } from "../../services/schedule-search-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
  const date = selectedDate.value 

  const dailySchedules = await scheduleSearchByDay({ date })
  schedulesShow({ dailySchedules })
  
  hoursLoad({ date, dailySchedules })
}