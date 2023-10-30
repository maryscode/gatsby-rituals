import React, { useRef } from "react";
import styled from "styled-components";
import iconError from "../../images/icon-error.svg";
import checkmark from "../../images/checkmark.svg";
// import { FormError } from "../FormError";

/**
 * Component definition
 */
export const Checkbox = ({ ...props }) => {
  const checkboxRef = useRef([]);
  if (props.useForm === undefined) {
    return <></>;
  }
  const className = props.className ? props.className : "";
  const {
    watchAllFields,
    register,
    handleKeyDown,
    errors,
    trigger,
    focusedField,
    handleFieldFocus,
    handleFieldBlur,
    setValue,
    getValues,
  } = props.useForm;

  const handleOnBlur = (e) => {
    trigger(props.name);
    handleFieldBlur();
  };
  let checkbox = [];
  let isMultiCheck = props.value.length > 1;
  props.value.forEach((value, index) => {
    let checked =
      watchAllFields &&
      watchAllFields[props.name] &&
      (watchAllFields[props.name] === value ||
        watchAllFields[props.name].indexOf(value) > -1)
        ? "true"
        : "false";
    let label = isMultiCheck ? value : props.children;
    let htmlFor = props.name + value.toLowerCase().replace(/\s/g, "");
    let required = props.required ? true : false;
    let noerrors = props.required === "noerrors" ? true : false;
    checkbox.push(
      <div
        key={htmlFor}
        className={!noerrors && errors[props.name] ? "checkbox-error " : ""}
        // className={errors[props.name] ? "" : ""}
      >
        {!noerrors && errors[props.name] && index === 0 && (
          <span className="alert">
            <img src={iconError} alt="Error icon" /> {props.message}
          </span>
        )}
        {/* <FormError
          errors={errors}
          name={props.name}
          message={props.message}
          index={index}
        /> */}
        <label
          htmlFor={`${htmlFor}-label`}
          className={
            !noerrors && errors[props.name] ? "checkbox checkbox-error" : "checkbox"
            // errors[props.name] ? "checkbox" : "checkbox"
          }
        >
          <span
            ref={el => checkboxRef.current[index] = el}
            id={`${htmlFor}-label`}
            role="checkbox"
            title="Consent checkbox"
            aria-checked={checked}
            tabIndex={0}
            data-name={props.name}
            onKeyDown={(e) => {
              handleKeyDown(e, props.name, value, isMultiCheck);
            }}
            onBlur={handleOnBlur}
            onFocus={handleFieldFocus}
            className={focusedField === htmlFor ? "focused" : ""}
            onClick={() => {
                let oldValue = getValues(props.name);
                let newValue = value;
                if (isMultiCheck) {
                    if (!oldValue) {
                        setValue(props.name, [newValue]);
                    }else{
                        if (oldValue.indexOf(newValue) > -1) {
                            oldValue.splice(oldValue.indexOf(newValue), 1);
                            setValue(props.name, oldValue);
                        }else{
                            setValue(props.name, [...oldValue, newValue]);
                        }
                    }
                } else {
                    if (oldValue) {
                        setValue(props.name, false);
                    }else{
                        setValue(props.name, newValue);
                    }
                }
                trigger([props.name]);
            }}
          >
            <img src={checkmark} alt="Checkmark" />
            <input
              type="checkbox"
              name={props.name}
              id={htmlFor}
              value={value}
              {...register(props.name, { required: required })}
              required={required && !noerrors ? "required" : false}
              autoComplete={props.autoComplete}
            />
          </span>
          <span
          data-index={index}
          onClick={(e) => {
            if (checkboxRef.current.length > 0) {
                checkboxRef.current[e.target.getAttribute('data-index')].click();
            }
          }}
          >{label}</span>
        </label>
      </div>
    );
  });
  return (
    <CheckBoxStyle
      className={"column " + (isMultiCheck ? "multi-check " : "") + className}
    >
      {isMultiCheck && props.children}
      {checkbox}
    </CheckBoxStyle>
  );
};

/**
 * Component styles
 */
const CheckBoxStyle = styled.div`
  &.column {
    &.multi-check {
      .checkbox {
        margin: 0 0 20px 0;
      }
      div:last-child .checkbox{
        margin-bottom: 0;
      }
    }
    .checkbox-error .alert {
      margin-bottom: 5px;
    }
    .checkbox-error > span:nth-child(1):not(.alert) {
      border: solid 2px #b83b43 !important;
    }
    label.checkbox {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      line-height: 1.38;
      cursor: pointer;
      & > span:nth-child(1) {
        input {
          display: none;
          /* opacity: 0;
          pointer-events: none; */
        }
        img {
          /* display: none; */
          visibility: hidden;
          pointer-events: none;
          width: 18px;
          height: 18px;
          padding: 2px;
          &::selection {
            background-color: transparent;
            color: transparent;
          }
        }
        &[aria-checked="true"] {
          img {
            /* display: inline; */
            visibility: visible;
          }
          path {
            /* fill: #fcc454 !important; */
          }
        }
        &.focused {
          /* border: solid 1px #fcc454;
          outline: solid 1px #fcc454; */
          border: solid 1px #000000;
          outline: solid 1px #000000;
        }
        margin: 0 12px 0 0;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        border: solid 1px #707070;
        background-color: #ffffff;
      }
      & > span:nth-child(2) {
        flex-basis: calc(100% - 20px);
      }
    }
  }
`;
