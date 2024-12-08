import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const inputScheduleHour = document.getElementById("schedule-hour")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // console.log(hour)
    const [scheduleHour] = hour.split(":")
    
    const isHourFuture = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    return {
      hour, 
      available: isHourFuture,
    }
  })

  // Pega o primeiro e último horário para min e max do input.
  const availableTime = []
  opening.forEach(({ hour, available }) => {
    available ? availableTime.push(hour) : null
  })

  inputScheduleHour.min = availableTime.shift()
  inputScheduleHour.max = availableTime.pop()
}