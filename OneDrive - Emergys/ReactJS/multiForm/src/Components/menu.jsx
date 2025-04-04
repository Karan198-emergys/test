import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
const Menu = (props) => {
  const { step, caption, stepName, isActive, setCurrentStep } = props;
  return (
    <div className="stepWrapper">
      <div
        className={`step ${isActive ? "activeStep" : ""}`}
        onClick={() =>
          setCurrentStep((PrevState) => {
            return {
              ...PrevState,
              stepCount: step,
            };
          })
        }
      >
        {step + 1}
      </div>
      <div className="stepInfo">
        <div className="caption">{caption}</div>
        <div className="stepName">{stepName}</div>
      </div>
    </div>
  );
};
Menu.propTypes = {
  step: PropTypes.number,
  caption: PropTypes.string,
  stepName: PropTypes.string,
  isActive: PropTypes.bool,
  setCurrentStep: PropTypes.func,
};
export default Menu;
