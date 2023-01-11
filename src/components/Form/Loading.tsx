import React from "react";
import loadingStyle from "src/components/Form/Loading.module.css";

export const Loading = () => {
  return (
    <div className={loadingStyle.container}>
      <div className={loadingStyle.loaderWrap}>
        <div className={loadingStyle.loader}></div>
      </div>
      <div className={loadingStyle.textWrap}>
        <p className={loadingStyle.text}>Now Sending...</p>
      </div>
    </div>
  );
};
