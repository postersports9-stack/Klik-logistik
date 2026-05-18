export function formatDenar(value: number): string {
  const sign = value < 0 ? "-" : ""
  const digits = Math.abs(Math.round(value)).toString()
  let out = ""
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 === 0) out += "."
    out += digits[i]
  }
  return sign + out
}
