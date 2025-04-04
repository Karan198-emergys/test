import { caption } from "framer-motion/client";
import advanced from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";
export const multiFormContent = [
  {
    step: 0,
    caption: "Step 1",
    stepName: "YOUR INFO",
    nextButton: "Next Step",
    components: {
      contentType: "personalInfo",
      header: "Personal info",
      subHeading: "Please provide your name, email address, and phone number.",
      inputComponents: [
        {
          id: "name",
          label: "Name",
          labelError: "Please enter your name",
          type: "text",
          placeHolder: "e.g. Stephen King",
        },
        {
          id: "email",
          label: "Email Address",
          labelError: "Please enter your email",
          type: "email",
          placeHolder: "e.g. stephenking@lorem.com",
        },
        {
          id: "number",
          label: "Phone Number",
          labelError: "Please enter your phone number",
          type: "tel",
          placeHolder: "e.g. +1 234 567 890",
        },
      ],
    },
  },
  {
    step: 1,
    caption: "Step 2",
    stepName: "SELECT PLAN",
    backButton: "Go Back",
    nextButton: "Next Step",
    billingOptions: ["monthly", "yearly"],
    components: {
      contentType: "plans",
      header: "Select your plan",
      subHeading: "You have the option of monthly or yearly billing.",
      planContent: [
        {
          id: "arcade_plan",
          icon: arcade,
          planName: "Arcade",
          planPriceMonthly: "$9/mo",
          planPriceYearly: "$90/yr",
          offer: "2 months free",
        },
        {
          id: "advance_plan",
          icon: advanced,
          planName: "Advance",
          planPriceMonthly: "$12/mo",
          planPriceYearly: "$120/yr",
          offer: "2 months free",
        },
        {
          id: "pro_plan",
          icon: pro,
          planName: "Pro",
          planPriceMonthly: "$15/mo",
          planPriceYearly: "$150/yr",
          offer: "2 months free",
        },
      ],
    },
  },
  {
    step: 2,
    caption: "Step 3",
    stepName: "ADD-ONS",
    backButton: "Go Back",
    nextButton: "Next Step",
    components: {
      contentType: "addOns",
      header: "Pick add-ons",
      subHeading: "Add-ons help enhance your gaming experience.",
      addOnsContent: [
        {
          id: "online_wrapper",
          label: "check1",
          addOnsName: "Online services",
          addOnsInfo: "Access to multiplayer games",
          addOnsMonthlyPrice: "+$1/mo",
          addOnsYearlyPrice: "+$10/yr",
        },
        {
          id: "storage_wrapper",
          label: "check2",
          addOnsName: "Larger storage",
          addOnsInfo: "Extra 1TB of cloud save",
          addOnsMonthlyPrice: "+$2/mo",
          addOnsYearlyPrice: "+$20/yr",
        },
        {
          id: "customize_wrapper",
          label: "check3",
          addOnsName: "Customizable profile",
          addOnsInfo: "Custom theme on your profile",
          addOnsMonthlyPrice: "+$2/mo",
          addOnsYearlyPrice: "+$20/yr",
        },
      ],
    },
  },
  {
    step: 3,
    caption: "Step 4",
    stepName: "SUMMARY",
    backButton: "Go Back",
    nextButton: "Confirm",
    components: {
      header: "Finishing up",
      subHeading: "Double-check everything looks OK before confirming",
    },
  },
  {
    thankYouSUmmary: "thank You",
  }
];
