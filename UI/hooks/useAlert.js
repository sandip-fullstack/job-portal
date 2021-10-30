import { useState } from "react";

export default function useAlert() {
  const [alertMessage, setAlertMessage] = useState();

  const showAlertMessage = (message) => {
    setAlertMessage(message);
    setTimeout(function () {
      setAlertMessage("");
    }, 3000);
  };
  const hideAlertMessage = () => {
    setAlertMessage("");
  };

  return [alertMessage, showAlertMessage, hideAlertMessage];
}
