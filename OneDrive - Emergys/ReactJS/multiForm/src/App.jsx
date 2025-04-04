import "./App.css";
import SideBar from "./Components/sideBar";
import Step1 from "./Components/step1";
import Step2 from "./Components/step2";
import Step3 from "./Components/step3";
import Step4 from "./Components/Step4";
import ThankYou from "./Components/thankYou";
import { useState, useEffect } from "react";
import { multiFormContent } from "../src/utilities/helper";

function App() {
  // Here the CurrentStep is stored for the Rendering the Current Data
  const [currentStep, setCurrentStep] = useState({
    stepCount: 0,
    setDisableButton: true,
  });

  // Here the plan Toggler Data is stored in the Hook

  const [planDuration, setPlanDuration] = useState(false);

  // Here the Plan selection Data is being Stored

  const [planData, setPlanData] = useState({
    plan: "",
    planPrice: "",
    planFrequency: "",
  });

  // from here the Add On State is stored for the step 4

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  // From here the Step 2 Data is been tested

  const step2Data = (e, planObj) => {
    const { value } = e.target;
    setPlanData((prevState) => {
      console.log("Previous State:", prevState);
      const planType = planDuration
        ? planObj.planPriceYearly
        : planObj.planPriceMonthly;
      return {
        ...planObj,
        plan: value,
        planPrice: planType,
        planFrequency: planDuration ? "Yearly" : "Monthly",
      };
    });
  };
  console.log("before hitting the planDuration", planData);

  // Here we are setting the updated Data to shown after the planDuration toggle button is being hit's

  useEffect(() => {
    setPlanData((prevState) => {
      return {
        ...prevState,
        plan: planData.plan,
        planPrice: planDuration
          ? prevState.planPriceYearly
          : prevState.planPriceMonthly,
      };
    });
    setSelectedAddOns((prevAddOn) => {
      return prevAddOn.map((addOn) => {
        return {
          ...addOn,
          addOnPrice: planDuration
            ? addOn.addOnsYearlyPrice
            : addOn.addOnsMonthlyPrice,
        };
      });
    });
    console.log("after hitting the planDuration", planData);
  }, [planDuration]);

  // Here the Step 3 Data is being Stored

  const step3Data = (e, addOnsObj) => {
    const { checked } = e.target;
    const { addOnsName, addOnsMonthlyPrice, addOnsYearlyPrice } = addOnsObj;

    const price = planDuration ? addOnsYearlyPrice : addOnsMonthlyPrice;

    if (checked) {
      setSelectedAddOns((prevAddOns) => [
        ...prevAddOns,
        {
          ...addOnsObj,
          addOnName: addOnsName,
          addOnPrice: price,
        },
      ]);
      console.log(addOnsObj);
    } else if (!checked) {
      setSelectedAddOns((prevAddOns) =>
        prevAddOns.filter((addon) => addon.addOnName !== addOnsName)
      );
    }
  };
  // useEffect(() => {
  //   setSelectedAddOns((prevAddOn) => {
  //     prevAddOn.map((addOn) => {
  //       return {
  //         addOnName: addOn.addOnsName,
  //         addOnPrice: planDuration
  //           ? addOn.addOnsYearlyPrice
  //           : addOn.addOnsMonthlyPrice,
  //       };
  //     });
  //   });
  //   console.log(selectedAddOns);
  // }, [planDuration]);

  console.log(selectedAddOns);

  // From here the Yearly toggle is been checked

  const isYearly = (e) => {
    const { checked } = e.target;
    setPlanDuration(checked);
  };

  // From here stepCount is increased by the button and also decreased

  const { stepCount } = currentStep;

  const backButtonFunc = () => {
    if (stepCount > 0) {
      setCurrentStep((prevState) => {
        const newCurrentCount = prevState.stepCount - 1;
        console.log(newCurrentCount);
        return { ...prevState, stepCount: newCurrentCount };
      });
    }
  };
  const nextButtonFunc = () => {
    if (stepCount < multiFormContent.length) {
      setCurrentStep((prevState) => {
        return { ...prevState, stepCount: prevState.stepCount + 1 };
      });
      console.log(stepCount);
    }
  };

  // From here the actual Data is being rendered

  return (
    <div className="Container">
      <div className="mainContainer">
        <SideBar stepCount={stepCount} setCurrentStep={setCurrentStep} />
        <div className="formContent">
          {stepCount === 0 && ( 
            <Step1
              stepCount={stepCount}
              backButtonFunc={backButtonFunc} 
              nextButtonFunc={nextButtonFunc}
              setCurrentStep={setCurrentStep}
            />
          )}
          {stepCount === 1 && (
            <Step2
              stepCount={stepCount}
              isYearly={isYearly}
              planDuration={planDuration}
              planData={planData}
              step2Data={step2Data}
              backButtonFunc={backButtonFunc}
              nextButtonFunc={nextButtonFunc}
              setCurrentStep={setCurrentStep}
            />
          )}
          {stepCount === 2 && (
            <Step3
              stepCount={stepCount}
              step3Data={step3Data}
              planData={planData}
              selectedAddOns={selectedAddOns}
              setSelectedAddOns={setSelectedAddOns}
              backButtonFunc={backButtonFunc}
              nextButtonFunc={nextButtonFunc}
              setCurrentStep={setCurrentStep}
              planDuration={planDuration}
            />
          )}
          {stepCount === 3 && (
            <Step4
              stepCount={stepCount}
              planData={planData}
              selectedAddOns={selectedAddOns}
              changePlan={setCurrentStep}
              backButtonFunc={backButtonFunc}
              nextButtonFunc={nextButtonFunc}
              planDuration={planDuration}
              setCurrentStep={setCurrentStep}
              setPlanData={setPlanData}
              setSelectedAddOns={setSelectedAddOns}
              setPlanDuration={setPlanDuration}
            />
          )}
          {stepCount > 3 && <ThankYou setCurrentStep={setCurrentStep} />}
        </div>
      </div>
    </div>
  );
}

export default App;
