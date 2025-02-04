export function PersianDigit(persianNumber: string): string {
  const persianDigits: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(persianDigits[i], "g");
    persianNumber = persianNumber.replace(regex, englishDigits[i]);
  }

  return persianNumber;
}
