import React from "react";
import ApiProvidersList from "./ApiProvidersList";

const ApiProviders = (props) => {
  let apiProvidersClass = props.show ? "side-drawer open" : "side-drawer";

  return (
    <div className={apiProvidersClass}>
      <div className="spacer-bottom">
      <div className="closeBtnContainer">
        <div className="closeButton" onClick={props.closeList}>
          X
        </div>
      </div>
      </div>
      <ApiProvidersList apiProvidersList={props.apiProvidersList} />
    </div>
  );
};

export default ApiProviders;
