import "../Components/step2.css";
import { multiFormContent } from "../utilities/helper";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Step2 = ({
  isYearly,
  planDuration,
  stepCount,
  step2Data,
  planData,
  nextButtonFunc,
  backButtonFunc,
}) => {
  console.log(planData, planData.plan === "");
  const formComponent = multiFormContent[stepCount];
  const { components, nextButton, backButton } = formComponent;
  const { header, subHeading, planContent } = components;

  useEffect(() => {
    if (planData.plan === "") {
      step2Data({ target: { value: "Arcade" } }, planContent[0]);
    }
  }, []);
  return (
    <form
      id="planSelection"
      className="step2Container"
      // onSubmit={handleSubmit(onSubmitStep2)}
    >
      <div className="form_Heading">
        <p className="heading">{header}</p>
        <p className="sub_Heading">{subHeading}</p>
      </div>
      <div className="planModule">
        {planContent.map((planObj) => {
          const {
            id,
            icon,
            planName,
            planPriceMonthly,
            planPriceYearly,
            offer,
          } = planObj;
          return (
            <label
              htmlFor={id}
              id={`${id}_label`}
              key={id}
              className={`card ${
                planData.plan === planName ? "selectedCard" : ""
              }`}
            >
              <input
                type="radio"
                className="radioCard"
                id={id}
                value={planName}
                name="planRadio"
                checked={planData.plan === planName}
                onChange={(e) => step2Data(e, planObj)}
              />
              <div className="card_container">
                <div className="card_content">
                  <div className="image">
                    <img src={icon} alt={planName} />
                  </div>
                  <div className="priceDetail">
                    <div className="planType">{planName}</div>
                    <div className="planPrice">
                      {planDuration ? planPriceYearly : planPriceMonthly}
                    </div>
                    <div className="free_offer" style={{ fontStyle: "italic" }}>
                      {planDuration ? offer : ""}
                    </div>
                  </div>
                </div>
              </div>
            </label>
          );
        })}
      </div>
      <div className="planToggler">
        <div
          className={`duration ${planDuration ? "monthlyColor" : ""}`}
          id="monthDuration"
        >
          Monthly
        </div>
        <label htmlFor="plan_Selection_toggler" className="DurationSlider">
          <input
            type="checkbox"
            name="checkbox_toggler"
            id="plan_Selection_toggler"
            checked={planDuration}
            onChange={isYearly}
          />
          <span htmlFor="plan_Selection_toggler" className="slider"></span>
        </label>
        <div
          className={`duration ${planDuration ? "" : "yearlyColor"}`}
          id="yearDuration"
        >
          Yearly
        </div>
      </div>
      {planData.plan === "" ? (
        <div className="tempTextStep2">Please Select one of the plan</div>
      ) : (
        ""
      )}
      <div className="buttonGroup">
        {stepCount > 0 && (
          <button id="backButton" onClick={backButtonFunc} type="button">
            {backButton}
          </button>
        )}
        {stepCount < multiFormContent.length - 1 && (
          <button
            onClick={nextButtonFunc}
            type="button"
            disabled={planData.plan === ""}
            className={
              planData.plan === ""
                ? "secondStepNextButtonBefore"
                : "secondStepNextButtonAfter"
            }
          >
            {nextButton}
          </button>
        )}
      </div>
    </form>
  );
};
Step2.propTypes = {
  isYearly: PropTypes.func,
  planDuration: PropTypes.bool,
  stepCount: PropTypes.number,
  step2Data: PropTypes.func,
  planData: PropTypes.func,
  backButtonFunc: PropTypes.func,
  nextButtonFunc: PropTypes.func,
  setCurrentStep: PropTypes.func,
};
export default Step2;
