import dayjs from "dayjs";

export function formatDate(date: string) {
  const dateFormatted = dayjs(date).format(`DD[ de ]MMMM`);

  return dateFormatted;
}
