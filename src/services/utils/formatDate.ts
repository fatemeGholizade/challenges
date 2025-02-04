export const formatDate = (
  date: string,
  formatOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  },
  formatFunction: "toLocaleDateString" | "toLocaleTimeString" = "toLocaleDateString"
) => {
  const utcDate = new Date(date);
  const localTimezoneOffset = utcDate.getTimezoneOffset();
  const localTime = new Date(utcDate.getTime() - localTimezoneOffset * 60000);
  const convertedDate =
    formatFunction === "toLocaleDateString"
      ? localTime.toLocaleDateString("fa-IR", formatOptions)
      : localTime.toLocaleTimeString("fa-IR", formatOptions);

  return convertedDate.replaceAll(/،|,/g, " | ");
};
