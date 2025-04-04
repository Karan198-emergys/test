import "../Components/step4.css";
import PropTypes from "prop-types";
import { multiFormContent } from "../utilities/helper";

const Step4 = ({
  stepCount,
  planData,
  selectedAddOns,
  backButtonFunc,
  nextButtonFunc,
  changePlan,
  setCurrentStep,
  setPlanData,
  setSelectedAddOns,
  setPlanDuration,
  planDuration,
}) => {
  const summaryContent = multiFormContent[stepCount];
  const { plan, planPrice, planFrequency } = planData;
  const { components, backButton, nextButton } = summaryContent;
  const { header, subHeading } = components;

  const addOnTotal = selectedAddOns.reduce(
    (acc, price) => acc + parseInt(price.addOnPrice.replace(/\D/g, "")),
    0
  );
  const totalPrice = addOnTotal + parseInt(planPrice.replace(/\D/g, ""));
  console.log(totalPrice);

  const pageReloading = () => {
    setCurrentStep((prevState) => ({ ...prevState, stepCount: 0 }));
    setPlanData((prevState) => ({ ...prevState, plan: "", planPrice: "" }));
    setSelectedAddOns((prevAddOn) => {
      return prevAddOn.map(() => {
        return {
          addOnName: "",
          addOnPrice: "",
        };
      });
    });
  };

  return (
    <div className="step4Container">
      <div className="form_Heading">
        <div className="heading">{header}</div>
        <div className="sub_Heading">{subHeading}</div>
      </div>
      <div className="summaryComponents">
        <div className="selected">
          <div className="selectedPlan">
            <div className="selectedPlanInfo">
              <div className="selectedPLanName">
                {plan} ({planFrequency})
              </div>
              <div
                className="changePlanDynamically"
                onClick={() =>
                  changePlan((prevState) => ({ ...prevState, stepCount: 1 }))
                }
              >
                Change
              </div>
            </div>
            <div className="selectedPrice">{planPrice}</div>
          </div>
          <div className="underLine">
            <p></p>
          </div>
          <div className="selectedAddOnsList">
            {selectedAddOns.length === 0 ? (
              <div className="emptyAddOnList">No add On is Being selected</div>
            ) : (
              selectedAddOns.map((addOnItem, index) => {
                const { addOnName, addOnPrice } = addOnItem;
                return (
                  <div key={index} className="selectedAddOns">
                    <div className="selectedAddOnsName">{addOnName}</div>
                    <div className="selectedAddOnsPrice">{addOnPrice}</div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div className="totalPriceSection">
          <div className="totalAsPer">
            Total(per {planDuration ? "year" : "month"})
          </div>
          <div className="totalPrice">
            ${totalPrice}/{planDuration ? "yr" : "mo"}
          </div>
        </div>
      </div>
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

Step4.propTypes = {
  stepCount: PropTypes.number,
  planData: PropTypes.object,
  backButtonFunc: PropTypes.func,
  nextButtonFunc: PropTypes.func,
  selectedAddOns: PropTypes.array,
  addOnName: PropTypes.string,
  addOnPrice: PropTypes.string,
  changePlan: PropTypes.func,
  planDuration: PropTypes.bool,
  setCurrentStep: PropTypes.func,
  setPlanData: PropTypes.func,
  setSelectedAddOns: PropTypes.func,
  setPlanDuration: PropTypes.func,
};

export default Step4;
