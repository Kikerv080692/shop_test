import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { PAGES_SLUGS } from "@/constants/pages.js";

const CartPayment = ({ removeAllFromCart }) => {
  const navigate = useNavigate();

  const chackout = () => {
    navigate(PAGES_SLUGS.payment, {
      state: { data: JSON.parse(localStorage.getItem("cart")) },
    });
    removeAllFromCart();
  };

  const PaymentSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Обов'язкове поле.Ведіть ваше ім'я"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Обов'язкове поле"),
    age: Yup.number().min(18, "Немає 18 років").required("Обов'язкове поле"),
    address: Yup.string().required("Обов'язкове поле"),
    phone: Yup.string()
      .min(9, "ведіть коректний номер із 9 цифр")
      .required("Обов'язкове поле"),
  });

  return (
    <div className="payment">
      <h2 className="payment__title">Оплата</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          address: "",
          phone: "",
        }}
        onSubmit={(e) => console.log(e)}
        validationSchema={PaymentSchema}
      >
        {({
          isValid,
          handleChange,
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
        }) => (
          <form className="payment__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="Ваше ім'я"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Ваше прізвище"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
            <input
              type="text"
              name="age"
              placeholder="Ваш вік"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            />
            {errors.age && touched.age && (
              <div className="error-message">
                {errors.age === "required"
                  ? "Обов'язкове поле"
                  : ""}
                {values.age !== "" && isNaN(parseInt(values.age))
                  ? "ведіть число"
                  : ""}
                {values.age !== "" && parseInt(values.age) < 18
                  ? "вам меньше 18"
                  : ""}
              </div>
            )}
            <input
              type="text"
              name="address"
              placeholder="Ваша адреса"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            {errors.address && touched.address && (
              <div className="error-message">{errors.address}</div>
            )}
            <input
              type="text"
              name="phone"
              placeholder="Ваш номер телефону"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <div className="error-message">{errors.phone}</div>
            )}
            {
              <button
                className="payment__form-btn"
                type="submit"
                disabled={!isValid}
                onClick={chackout}
              >
                Оплата
              </button>
            }
          </form>
        )}
      </Formik>
    </div>
  );
};
export default CartPayment;
