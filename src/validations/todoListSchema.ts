import * as yup from "yup";
const persianRegex = /^[\u0600-\u06FF\s!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\]*$/;
export const todoSchema = yup.object().shape({
  title: yup
    .string()
    .matches(persianRegex, "عنوان باید فارسی باشد.")
    .required("عنوان ضروری است."),
});
