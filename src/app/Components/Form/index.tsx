'use client';

import React from "react";

interface FormProps {
  className: string,
}

const JitsuForm = ({ className }: FormProps) => {
  const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_KEY
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_KEY
  const BASE_URL = 'https://api.contentful.com'
  const submitForm = async (formData: any) => {
    try {
      const response = await fetch(
        `${BASE_URL}/spaces/${SPACE_ID}/environments/master/entries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'X-Contentful-Content-Type': 'formData',
          },
          body: JSON.stringify({
            fields: {
              name: { 'en-US': formData.fullName },
              email: { 'en-US': formData.email },
              phone: { 'en-US': formData.mobile },
              message: {
                'en-US': {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value: formData.message,
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    }
                  ]
                }
              },
            },
          })
        }
      );
      const result = await response.json();
    } catch (error) {
      console.error('Error posting form data to Contentful: ', error)
    }
  };
  const intialValues = { 
    fullName: "",
    email: "", 
    mobile: "",
    message: "", 
  };
  const [formValues, setFormValues] = React.useState(intialValues);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitForm(formValues);
      setFormValues(intialValues)
      setIsSubmitting(false)
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
    }
  };
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input 
                type="text" 
                name="fullName"
                value={formValues.fullName}
                className="form-control" 
                placeholder="Full Name" 
                id="fullName"
                onChange={handleChange}
                required
              />
              <label htmlFor="fullName">Full Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input 
                type="email" 
                className="form-control" 
                value={formValues.email}
                onChange={handleChange}
                name="email"
                placeholder="Your Email" 
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input 
                type="text" 
                value={formValues.mobile}
                onChange={handleChange}
                name="mobile"
                className="form-control" 
                placeholder="Mobile Number"
                required
              />
              <label htmlFor="mobile">Your Mobile</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea 
                className="form-control" 
                name="message"
                placeholder="Leave a special request" 
                style={{ height: "150px" }}
                value={formValues.message}
                onChange={handleChange}
              />
              <label htmlFor="message">Special Request</label>
            </div>
          </div>
          <div className="col-12">
            <button 
              className="btn btn-primary w-100 py-3"
              type="submit"
            >
              Send Messsage
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default JitsuForm;