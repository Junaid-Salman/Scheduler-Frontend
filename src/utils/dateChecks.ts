export const isToday = (date?: Date | string | null): boolean => {
  if (!date) return false

  const parsed = new Date(date)
  if (isNaN(parsed.getTime())) return false

  const today = new Date()

  return (
    parsed.getFullYear() === today.getFullYear() &&
    parsed.getMonth() === today.getMonth() &&
    parsed.getDate() === today.getDate()
  )
}