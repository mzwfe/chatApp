import dayjs from "dayjs"

export default function formatTime(value) {
  const now = Date.now()
  if (value === undefined) {
    return ''
  }
  if (now - value < 86400000) {
    return dayjs(value).format("HH:mm")
  } else {
    return dayjs(value).format("MM月DD日")
  }
}

export function formatTimeSetting(value) {
  return dayjs(value).format("YYYY年MM月DD日")
}
