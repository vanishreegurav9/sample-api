import React from "react";

const Provider = (props) => {

const providerDetails = props.apiProvider;
console.log("Props.providerDetails ", providerDetails.info["x-logo"]["url"]);
const imgUrl = providerDetails.info["x-logo"]["url"];
  return (
    <div className="full-screen-div-provider">
        <div>
          <div><img src={imgUrl}/></div>
          <div><p>{providerDetails.info.title}</p></div>
        </div>

        <div>
          <div><h3>Description</h3></div>
          <div><p>{providerDetails.info.description}</p></div>
        </div>

        <div>
          <div><h3>Swagger</h3></div>
          <div><p>{providerDetails.swaggerUrl}</p></div>
        </div>

        <div>
          <div><h3>Contact</h3></div>
          <div>
            <p>Email {providerDetails.info.contact.email}</p>
            <p>Name {providerDetails.info.contact.name}</p>
            <p>Url {providerDetails.info.contact.url}</p>
          </div>
        </div>
    </div>
    
    
  );
}
export default Provider;