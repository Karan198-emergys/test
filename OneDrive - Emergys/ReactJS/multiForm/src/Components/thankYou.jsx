import PropTypes from "prop-types";
import thankYouImage from "../assets/images/icon-thank-you.svg";
import "../Components/thankYou.css";
const ThankYou = ({ setCurrentStep }) => {
  return (
    <div className="step5Container">
      <div className="thanksSummary">
        <div className="thanksImg">
          <img src={thankYouImage} alt="" />
        </div>
        <div className="ThanksText">Thank You !</div>
        <div className="thanksDescription">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </div>
      </div>
    </div>
  );
};
ThankYou.propTypes = {
  setCurrentStep: PropTypes.func,
};
export default ThankYou;
