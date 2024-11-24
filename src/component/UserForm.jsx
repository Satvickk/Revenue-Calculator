import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { generateRevenue } from "../utils/generateRevenue";
import { useDispatch } from "react-redux";
import { setData } from "../redux/features/dataSlice";

function UserForm() {
  const validationSchema = yup.object().shape({
    revenue: yup
      .number("Revenue should be a number")
      .typeError("Revenue must be a valid number")
      .positive("Revenue should be positive")
      .required("This field is required"),
    growthRate: yup
      .number("Growth rate should be a number")
      .typeError("Growth rate must be a valid number")
      .positive("Growth rate should be positive")
      .required("This field is required")
      .min(0, "Growth rate cannot be less than 0")
      .max(100, "Growth rate cannot exceed 100"),
  });

  const initialValues = {
    revenue: "",
    growthRate: "",
  };

  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    try {
      const payload = {
        currentRevenue: Number(values.revenue),
        growthRate: Number(values.growthRate),
      };
      const result = generateRevenue(payload);
      dispatch(setData(result));
      toast.success("Results generated successfully");
      resetForm();
    } catch (error) {
      console.log("Errors :", error);
      toast.error("Something went wrong!");
    }
  };

  const { values, handleSubmit, handleBlur, handleChange, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

  return (
    <div className="w-full rounded-xl bg-slate-200 h-full sm:col-span-1 shadow-md p-4 tracking-wider">
      <p className="text-gray-600 font-semibold text-lg mb-4">Fill Data</p>
      <form className="grid gap-4 mt-4" onSubmit={handleSubmit}>
        <label htmlFor="revenue" className="text-sm text-gray-600">
          Current Revenue (INR)
          <span className="text-red-500">*</span>
        </label>
        <input
          id="revenue"
          type="text"
          placeholder="0"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.revenue}
          className={`h-10 rounded-md px-3 w-full shadow-md ${
            errors.revenue && touched.revenue ? "border-2 border-red-600" : ""
          }`}
        />
        {errors.revenue && touched.revenue && (
          <p id="revenue-error" className="text-xs text-red-600">
            {errors.revenue}
          </p>
        )}

        <label htmlFor="growthRate" className="text-sm text-gray-600">
          Annual Growth Rate (%)
          <span className="text-red-500">*</span>
        </label>
        <input
          id="growthRate"
          type="text"
          placeholder="0"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.growthRate}
          className={`h-10 rounded-md px-3 w-full shadow-md ${
            errors.growthRate && touched.growthRate
              ? "border-2 border-red-600"
              : ""
          }`}
        />
        {errors.growthRate && touched.growthRate && (
          <p id="growthRate-error" className="text-xs text-red-600">
            {errors.growthRate}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition-all duration-300 shadow-md tracking-widest"
          disabled={Object.keys(errors).length > 0}
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default UserForm;
