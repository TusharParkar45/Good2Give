import React, { useState } from "react";
import InputType from "./InputType";

export const Form = ({ formType, submitBtn, fromTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [store, setStore] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form>
        <h1 className="text-center">{fromTitle}</h1>
        <hr />

        {/* Role selection only appears for the registration form */}
        {formType === "Register" && (
          <div className="d-flex">
            {["admin", "user", "organisation", "hotel", "store"].map((roleValue) => (
              <div className="form-check" key={roleValue}>
                <input
                  type="radio"
                  className="form-check-input"
                  name="role"
                  value={roleValue}
                  id={`${roleValue}Radio`}
                  checked={role === roleValue}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor={`${roleValue}Radio`} className="form-check-label">
                  {roleValue.charAt(0).toUpperCase() + roleValue.slice(1)}
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Conditional rendering based on formType */}
        {(() => {
          if (formType === "Login") {
            return (
              <>
                <InputType
                  labelText={"Email"}
                  labelFor={"forEmail"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={"Password"}
                  labelFor={"forPassword"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            );
          } else if (formType === "Register") {
            return (
              <>
                {(role === "admin" || role === "user") && (
                  <InputType
                    labelText={"Name"}
                    labelFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                {role === "organisation" && (
                  <InputType
                    labelText={"Organisation Name"}
                    labelFor={"forOrganisationName"}
                    inputType={"text"}
                    name={"organisationName"}
                    value={organisationName}
                    onChange={(e) => setOrganisationName(e.target.value)}
                  />
                )}
                {role === "hotel" && (
                  <InputType
                    labelText={"Hotel Name"}
                    labelFor={"forHotelName"}
                    inputType={"text"}
                    name={"hotelName"}
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                  />
                )}
                {role === "store" && (
                  <InputType
                    labelText={"Store Name"}
                    labelFor={"forStore"}
                    inputType={"text"}
                    name={"store"}
                    value={store}
                    onChange={(e) => setStore(e.target.value)}
                  />
                )}
                <InputType
                  labelText={"Email"}
                  labelFor={"forEmail"}
                  inputType={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputType
                  labelText={"Password"}
                  labelFor={"forPassword"}
                  inputType={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputType
                  labelText={"Address"}
                  labelFor={"forAddress"}
                  inputType={"text"}
                  name={"address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <InputType
                  labelText={"Phone"}
                  labelFor={"forPhone"}
                  inputType={"text"}
                  name={"phone"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            );
          }
          return null;
        })()}

        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};
