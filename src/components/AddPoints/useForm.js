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
      let points = values.code % 10 * 6;
      const postData = {
        userid: userInfo[0].userid,
        greenpoints: userInfo[0].greenpoints+points,
        carbonpoints:userInfo[0].carbonpoints+points,
        weekGP:userInfo[0].weekGP+points,
        weekCP:userInfo[0].weekCP+points
      }
      addUserPoints(postData);
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
