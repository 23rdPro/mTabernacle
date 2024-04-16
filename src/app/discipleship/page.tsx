"use client";

import React from "react";
import { PARAGRAPHS, QUOTE } from "../constants/constants"
import FacebookWidget from "../Components/FacebookWidget";
import JitsuForm from "../Components/Form";

const Discipleship: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Discipleship</h6>
            <blockquote className="blockquote" style={{ fontFamily: "cursive" }}>
              <p 
                className="mb-4 text-primary" 
                style={{ fontSize: ".89em", fontWeight: "unset" }}
              >
                {QUOTE}
              </p>
            </blockquote>
            {PARAGRAPHS.map((paragraph, index) => (
              <Paragraph 
                marginTop={index === 0 ? 2 : 0}
                topic={paragraph.topic}
                description={paragraph.description}
                key={index}
              />
            ))}
          </div>
          <div className="col-lg-5 pt-4" style={{ minHeight: "500px" }}>
            <div 
              className="position-relative h-100 w-100 wow fadeInUp dark" 
              data-wow-delay="0.5s"
            >
              {/* <TwitterWidget /> */}
              <FacebookWidget />
              <br />
              <div className="m-3">
                <h6 className="text-secondary text-uppercase">{'Get in Touch'}</h6>
                <JitsuForm className="bg-light p-3 h-40 d-flex align-items-start w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discipleship;

const Paragraph = ({ 
  marginTop,
  topic, 
  description }: { 
      marginTop?: number,
      topic: string, 
      description: string 
}) => {
  return (
    <div 
        style={{ 
            marginBottom: "3em",
            marginTop: `${marginTop}em` 
        }}
    >
        <p style={{ fontSize: "1.2em", color: "purple", fontWeight: "bold" }} > 
            {topic}
        </p>
        <p>{description}</p>
    </div>
  );
};