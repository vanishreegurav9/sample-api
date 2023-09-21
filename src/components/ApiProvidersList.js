import React from "react";
import { useNavigate } from "react-router-dom";

export default function ApiProvidersList(props){
  console.log("Data -: ", props.apiProvidersList);
  let ind = 0;
  const navigate = useNavigate();
  const redirectToProviderNamePage = (apiProviderName) => {
    navigate("/apiProviderDetails/" + apiProviderName);
  }

  let renderedList = props.apiProvidersList.map((item, i)=>{
    return <div key={ind++} onClick={() => redirectToProviderNamePage(item)} className="apiProviderName"><a onClick={() => redirectToProviderNamePage(item)} className="apiProviders" href="">{item}</a></div>
  })
  return (
    renderedList
  )
}
