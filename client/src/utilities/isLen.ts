export const isLen = (str: number) => {
  return `${str}`.length === 1 ? `0${str}` : str;
}