export const formatToYYYYMMDD = (date?: Date | string | null): string => {
  if (!date) return ""

  const parsed = new Date(date)
  if (isNaN(parsed.getTime())) return ""

  const year = parsed.getFullYear()
  const month = String(parsed.getMonth() + 1).padStart(2, "0")
  const day = String(parsed.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}
