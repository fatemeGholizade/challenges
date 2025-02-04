import * as yup from "yup";

// all persian letters are ok, also symbols, half space and full space that mey be needed are correct
const persianRegex = /^[\u0600-\u06FF\s\u200C!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\]*$/;
export const todoSchema = yup.object().shape({
  title: yup.string().matches(persianRegex, "عنوان باید فارسی باشد.").required("عنوان ضروری است."),
  priority: yup.string().required("لطفاً یک اولویت را انتخاب کنید."),
});
