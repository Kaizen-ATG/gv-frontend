import { useState, useEffect } from "react";
import { addUserPoints } from "../../utils/apiCalls.js";
import { useSelector } from "react-redux";

const useForm = (callback, validate) => {
  const userInfo = useSelector(state => state.users.userDetail);
  const [values, setValues] = useState({
    code: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      let points = values.code % 10 * 10;
      const postData = {
        userid: userInfo[0].UserId,
        greenpoints: userInfo[0].GreenPoints+points,
        carbonpoints:userInfo[0].CarbonPoints+points,
        weekGP:userInfo[0].WeekGP+points,
        weekCP:userInfo[0].WeekCP+points
      }
      addUserPoints(postData);
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
