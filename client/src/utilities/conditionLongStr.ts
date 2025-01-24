export const conditionLongStr = (str: string) => {
  return str.length <= 50 ? str : str.slice(0, 50) + `...`;
}