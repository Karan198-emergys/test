import "../Components/step1.css";
import { multiFormContent } from "../utilities/helper";
import { set, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { data } from "framer-motion/client";
const Step1 = ({ stepCount, setCurrentStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({});

  // This is where you define validation rules dynamically based on the field type
  const onSubmitStep1 = (data) => {
    // This is how the current step is updated after submission
    setCurrentStep((prevState) => ({ ...prevState, stepCount: stepCount + 1 }));
    console.log("User entered data:", data);
  };

  const formComponent = multiFormContent[stepCount];
  const { components, backButton, nextButton } = formComponent;
  const { header, subHeading, inputComponents } = components;

  return (
    <form className="step1Container" onSubmit={handleSubmit(onSubmitStep1)}>
      <div className="form_Heading">
        <div className="heading">{header}</div>
        <div className="sub_Heading">{subHeading}</div>
      </div>
      <div id="personalForm" className="personalInputs">
        {inputComponents.map((inputComp) => {
          const { id, label, labelError, type, placeHolder } = inputComp;

          // Define validation rules dynamically based on input type

          let validationRule = {};

          if (type === "text") {
            validationRule = {
                required: `Please enter a valid ${label}`,
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Please enter valid name",
                },
                min: 10,
                max: 20,
            };
          }
          if (type === "email") {
            validationRule = {
              required: `Please enter email address`,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
                message: "Invalid email format",
              },
            };
          }
          if (type === "tel") {
            validationRule = {
              required: "Please enter your phone number",
              pattern: {
                value: /^\[1-9]\d{10,10}$/,
                message: "Please enter phone number (between 10 to 15 digits)",
              },
            };
          }
          return (
            <div key={label} className="info_inputs">
              <div className="name_Input">
                <div className="input_label">
                  <label htmlFor={id}>{label}</label>
                  {errors[id] && (
                    <span className="error">
                      {errors[id]?.message || labelError}
                    </span>
                  )}
                </div>
                <input
                  type={type}
                  name={id}
                  className={`personal_Input ${
                    errors[id] ? "input_validate" : ""
                  }`}
                  id={id}
                  placeholder={placeHolder}
                  {...register(id, validationRule)}
                  // value={data}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttonGroup">
        {stepCount > 0 && (
          <button type="button" id="backButton" onClick={backButton}>
            Go Back
          </button>
        )}
        {stepCount < multiFormContent.length - 1 && (
          <button
            id="nextButton"
            onClick={() => {
              setValue(data);
            }}
            type="submit"
          >
            {nextButton}
          </button>
        )}
      </div>
    </form>
  );
};

Step1.propTypes = {
  stepCount: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  backButton: PropTypes.func.isRequired,
  nextButton: PropTypes.string.isRequired,
};

export default Step1;
