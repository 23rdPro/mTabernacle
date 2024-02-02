import React, { ChangeEvent, ChangeEventHandler } from "react";

interface InputFieldProps {
  onChange: (event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) => void,
  value: string,
  name: keyof FormDataType
}

interface TextAreaFieldProps {
  onChange: (event: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>) => void,
  value: string,
  name: keyof FormDataType
}

type FieldProps = InputFieldProps | TextAreaFieldProps;

export type FormDataType = {
  fullName: string;
  email: string;
  mobile: string;
  message: string;
};

export interface FieldsType { 
  Fields: React.FC<FieldProps>[]
}


const FullNameField: React.FC<any> = ({ onChange, value, name }) => {
    return (
        <div className="col-md-6">
          <div className="form-floating">
              <input 
                type="text" 
                name={name}
                value={value}
                className="form-control" 
                // id="name" 
                placeholder="Full Name" 
                onChange={onChange}
              />
              <label htmlFor="name">Your Name</label>
          </div>
        </div>
    )
}

const EmailField: React.FC<any> = ({ onChange, value, name }) => {
    return  (
        <div className="col-md-6">
          <div className="form-floating">
            <input 
              type="email" 
              className="form-control" 
              value={value}
              name={name}
              // id="email" 
              placeholder="Your Email" 
              onChange={onChange}
            />
            <label htmlFor="email">Your Email</label>
          </div>
        </div>
    )
}

const MobileField: React.FC<any> = ({ onChange, value, name }) => {
    return (
        <div className="col-12">
          <div className="form-floating">
            <input 
              type="text" 
              value={value}
              name={name}
              className="form-control" 
              placeholder="Mobile Number"
              onChange={onChange} 
            />
            <label htmlFor="mobile">Your Mobile</label>
          </div>
        </div>
    )
}

const PrayerRequestField: React.FC<any> = ({ onChange, value, name }) => {
    return (
        <div className="col-12">
          <div className="form-floating">
            <textarea 
              className="form-control" 
              name={name}
              placeholder="Leave a special request" 
              // id="message" 
              style={{ height: "150px" }}
              value={value}
              onChange={onChange}
            />
            <label htmlFor="message">Special Request</label>
          </div>
        </div>
    )
}

const discipleshipFields = [
    FullNameField,
    EmailField,
    MobileField,
    PrayerRequestField,
]

export default discipleshipFields;
