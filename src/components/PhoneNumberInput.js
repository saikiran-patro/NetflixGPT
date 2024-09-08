import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const PhoneNumberInput = () => {
  const [number, setNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <IntlTelInput
      containerClassName="intl-tel-input"
      inputClassName="form-control"
      onPhoneNumberChange={(isValid, number, countryData, fullNumber) => {
        setNumber(fullNumber);
        setIsValid(isValid);
      }}
      defaultCountry="us"
    />
  );
};

export default PhoneNumberInput;
