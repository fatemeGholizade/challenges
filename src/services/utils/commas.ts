export const addCommas = (number: number | string): string => {
  if (typeof number !== "number" && typeof number !== "string") return "";

  const convertedToString = number.toString();
  const tokenizedToEnglish = convertedToString;

  const tokenizedNumber = tokenizedToEnglish.split(".");
  const integer = tokenizedNumber[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  const decimal = tokenizedNumber[1] ? `.${tokenizedNumber[1]}` : "";

  return integer + decimal;
};

export const removeCommas = (str: string): number => {
  if (typeof str !== "string") {
    throw new TypeError("PersianTools: removeCommas - The input must be string");
  }

  let result = "" + str;
  if (result.indexOf(",") !== -1) {
    result = result.replace(/,\s?/g, "");
  }

  return Number(result);
};

export const addCommasToNumber = (number: string) => {
  return Number(number)
    .toFixed()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const addSpaceToPhoneNUmber = (number: string) => {
  return number.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3");
};
