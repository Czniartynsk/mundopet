import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const inputScheduleHour = document.getElementById("schedule-hour")

export function hoursLoad({ date, dailySchedules }) {
  // Verifica se a data está disponível. 
  // Obtém a lista de horários já ocupados.
  const unavailableHour = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":")
    
    const isHourFuture = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    const available = !unavailableHour.includes(hour) && isHourFuture

    return {
      hour, 
      available,
    }
  })

  // Pega o primeiro e último horário para min e max do input.
  const availableTime = []
  opening.forEach(({ hour, available }) => {
    available ? availableTime.push(hour) : null
  })

  inputScheduleHour.min = availableTime.shift()
  inputScheduleHour.max = availableTime.pop()

  return availableTime
}
