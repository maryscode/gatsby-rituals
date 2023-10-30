import React from "react";
// import { ExternalLink } from "../ExternalLink";
import iconCalendar from "../../images/icon-calendar.svg";
import iconLocation from "../../images/icon-location.svg";
import styled from "styled-components";

/**
 * Component definition
 */
export const Presentation = ({ presentations, className }) => {
  return presentations.map((presentation, index) => (
    <PresentationStyle
      className="column presentation"
      key={`presentation_${index}`}
    >
      <div className="column left-column">
        <div className="title-presenter">
          <h3 className={`${className}`}>{presentation.title}</h3>
          <span className={`presenter ${className}`}>
            {presentation.presenter}
          </span>
        </div>
        <div className="date-local">
          <span className={`${className}`}>
            <img src={iconCalendar} alt="Calendar icon" />{" "}
            <span>{presentation.date}</span>
          </span>
          <span className={`${className}`}>
            <img src={iconLocation} alt="Location icon" />{" "}
            <span>{presentation.location}</span>
          </span>
        </div>
      </div>
      <div className={`column right-column ${className}`}>
        {presentation.description}
      </div>
      {/* {presentation.link && (
        <ExternalLink className={`block ${className}`} href={presentation.link}>
          {presentation.link}
        </ExternalLink>
      )} */}
    </PresentationStyle>
  ));
};

/**
 * Component styles
 */
const PresentationStyle = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  flex: 1;
  margin: 0 0 40px;
  /* @media (min-width: 768px) {
    margin: 0 0 24px;
  } */
  &:last-of-type {
    margin: 0 0 36px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.22;
    text-align: center;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .left-column {
    /* width: 337px;
    max-width: 337px;
    min-width: 337px; */
    width: auto;
    max-width: 100%;
    min-width: 0;
    justify-items: flex-start;
    margin-bottom: 21px;
    @media (min-width: 768px) {
      width: 292px;
      flex-basis: 292px;
      max-width: 292px;
      min-width: 292px;
      margin-bottom: 0;
    margin-right: 44px;
    }
    /* flex-basis: 292px; */
    .title-presenter {
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06);
      background-color: #ffffff;
      /* margin-bottom: 18px; */
      .presenter {
        display: flex;
        /* flex-direction: column; */
        /* @media (min-width: 768px) { */
        flex-direction: row;
        /* } */
        flex: 1;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 60px;
          height: auto;
          margin-right: 0;
          /* @media (min-width: 768px) { */
          margin-right: 20px;
          /* } */
          border-radius: 500px;
        }
      }
    }
    .date-local {
      padding: 26px 20px 20px;
      transform: translateY(-8px);
      & > span {
        display: flex;
        align-items: center;
        grid-gap: 0px 8px;
        &:nth-child(1) {
          margin-bottom: 8px;
        }
        img {
          object-fit: none;
          object-position: center bottom;
          width: 13px;
          height: 13px;
        }
      }
      border-radius: 0 0 8px 8px;
      background-color: #ebebeb;
    }
  }
  .right-column {
      width: auto;
    h4 {
      margin: 0 0 8px;
    }
    ul {
      margin: 0 0 16px;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      justify-content: space-between;
      li {
        margin: 0;
        @media (min-width: 768px) {
          margin: 0 10px 0 0;
        }
        &:nth-last-child(1) {
          margin-right: 0;
        }
        &:before {
          display: none;
        }
      }
    }
  }
  p {
    width: unset;
    &:nth-last-child(1) {
      margin: 0;
    }
  }
`;
