import React, { useState } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

import ReCAPTCHA from "react-google-recaptcha"

export default function Origin2() {
  const [token, setToken] = useState("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const setTokenFunc = (getToken) => {
    setToken(getToken);

    console.log(getToken,'getToken')
  };

  return (
    <div>
         <ReCAPTCHA sitekey={"6Lfb-5EqAAAAALAB_naFhsOsqOHdw5F28m6s5qGs"} />

      <GoogleReCaptchaProvider
        reCaptchaKey={"6Lfb-5EqAAAAALAB_naFhsOsqOHdw5F28m6s5qGs"}
      >
        <>
          <GoogleReCaptcha
            className="google-recaptcha-custom-class"
            onVerify={setTokenFunc}
            refreshReCaptcha={refreshReCaptcha}
          />
        </>
      </GoogleReCaptchaProvider>
      <div className="text-center text-3xl mt-3">
        this is different origin without access
      </div>
      {/* <iframe src="https://form-iframer.vercel.app/dashboard" title="Example iframe" frameBorder="0" width="100%" height="700"></iframe> */}
      <form>
        <label>
          Name:
          <input className="border" type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input className="border" type="email" name="email" />
        </label>
        <br />
        <input className="border" type="submit" value="Submit" />
      </form>
    </div>
  );
}
