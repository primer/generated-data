export const returnOne = <T, U>(valueA: T, valueB?: U): T | U | "" => {
  const randomInt = Math.floor(Math.random() * 100) + 1
  return randomInt < 50 ? valueA : valueB ?? ""
}