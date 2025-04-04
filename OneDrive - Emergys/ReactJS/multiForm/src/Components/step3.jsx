import "../Components/step3.css";
import { multiFormContent } from "../utilities/helper";
import PropTypes from "prop-types";

const Step3 = ({
  stepCount,
  step3Data,
  selectedAddOns,
  backButtonFunc,
  nextButtonFunc,
  planDuration,
}) => {
  const addOnsComponent = multiFormContent[stepCount];
  const { components, nextButton, backButton } = addOnsComponent;
  const { header, subHeading, addOnsContent } = components;
  console.log(addOnsContent, "addOnsContent", planDuration);

  const selectedAddOnName = selectedAddOns.map((addOnsContent) => {
    return addOnsContent.addOnName;
  });
  return (
    <div className="step3Container">
      <div className="form_Heading">
        <div className="heading">{header}</div>
        <div className="sub_Heading">{subHeading}</div>
      </div>
      <form className="addOnsComponents">
        {addOnsContent.map((addOnsObj) => {
          const {
            id,
            addOnsName,
            addOnsInfo,
            addOnsMonthlyPrice,
            addOnsYearlyPrice,
          } = addOnsObj;
          return (
            <label
              htmlFor={`addOnCheck-${id}`}
              className={`addOnsWrapper ${
                selectedAddOnName.includes(addOnsName) ? "selectedCard" : ""
              }`}
              key={id}
            >
              <input
                type="checkbox"
                id={`addOnCheck-${id}`}
                name="addOnPlan"
                value={addOnsName}
                className="addOnsCommon"
                checked={selectedAddOns.find(
                  (addon) => addon.addOnName === addOnsName
                )}
                onChange={(e) => step3Data(e, addOnsObj)}
              />
              <span htmlFor={`addOnCheck-${id}`} className="checkMark"></span>
              <div className="addOnText">
                <p className="addOnsTitle">{addOnsName}</p>
                <p className="addOnsDetail">{addOnsInfo}</p>
              </div>
              <div className="addOnsPrice">
                {planDuration ? addOnsYearlyPrice : addOnsMonthlyPrice}
              </div>
            </label>
          );
        })}
      </form>
      <div className="buttonGroup">
        {stepCount > 0 && (
          <button id="backButton" onClick={backButtonFunc}>
            {backButton}
          </button>
        )}
        {stepCount < multiFormContent.length - 1 && (
          <button
            id="nextButton"
            form="personalForm"
            onClick={nextButtonFunc}
            type="submit"
          >
            {nextButton}
          </button>
        )}
      </div>
    </div>
  );
};
Step3.propTypes = {
  IsYearly: PropTypes.func,
  planDuration: PropTypes.bool,
  stepCount: PropTypes.number,
  step3Data: PropTypes.func,
  selectedAddOns: PropTypes.array,
  setSelectedAddOns: PropTypes.func,
  backButtonFunc: PropTypes.func,
  nextButtonFunc: PropTypes.func,
  planData: PropTypes.object,
};

export default Step3;
