export default function validateInfo(values) {
  let errors = {};

  if (!values.code.trim()) {
    errors.code = "Please enter the correct code";
  } else if (values.code.length > 4) {
    errors.code = "You have entered extra characters";
  }

  return errors;
}
