import "../Components/sideBar.css";
import Menu from "../Components/menu";
import { multiFormContent } from "../utilities/helper";
import PropTypes from "prop-types";

const SideBar = ({ stepCount, setCurrentStep }) => {
  const lastStep = multiFormContent.length - 1;
  return (
    <div className="sideBar">
      <div className="sideContent">
        {multiFormContent.slice(0, lastStep).map((menu) => {
          const { step, caption, stepName } = menu;
          return (
            <Menu
              key={step}
              step={step}
              stepName={stepName}
              caption={caption}
              isActive={step === stepCount}
              setCurrentStep={setCurrentStep}
            />
          );
        })}
      </div>
    </div>
  );
};
SideBar.propTypes = {
  stepCount: PropTypes.number,
  setCurrentStep: PropTypes.func,
};

export default SideBar;
