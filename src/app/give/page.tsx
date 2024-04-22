'use client';

import React from "react";
import { PaystackButton } from "react-paystack";

const Give = () => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
  const naira = '₦'

  const [amount, setAmount] = React.useState(0)
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [mobile, setMobile] = React.useState('')
  const [reference, setReference] = React.useState('')

  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [amountError, setAmountError] = React.useState('');
  const [mobileError, setMobileError] = React.useState('');

  const verifyField = () => {
    // reset state
    setNameError('');
    setEmailError('');
    setAmountError('');
    setMobileError('');

    let isValid = true;
    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError('Invalid email address');
      isValid = false;
    };
    if (isNaN(amount) || amount <= 0) {
      setAmountError('Invalid amount');
      isValid = false;
    };
    const mobileRegex = /^[0-9]{11}$/;
    if (!mobileRegex.test(mobile.trim())) {
      setMobileError('Invalid mobile number');
      isValid = false;
    };
    return isValid;
  };
  
  return (
    <div className="container-fluid my-0 px-0" >
      <div className="video wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="text-white mb-4 text-center">Thank you for your Kindness and Generosity.</h1>
        {/* <h3 className="text-white mb-0"></h3> */}
      </div>
      <div 
        className="container position-relative wow fadeInUp" 
        data-wow-delay="0.1s" 
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-light text-center p-5">
              <h1 className="mb-1">Giving</h1>
              <p className="mb-3">Give your offerings, tithes and special givings.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input 
                      type="text" 
                      className="form-control border-0" 
                      placeholder="Your Name" 
                      style={{ height: "55px" }} 
                      onChange={(e) => setName(e.target.value.trim())}
                    />
                    {nameError && <div className="invalid-feedback">{nameError}</div>}
                  </div>
                  <div className="col-12 col-sm-6">
                    <input 
                      type="email" 
                      className="form-control border-0" 
                      placeholder="Your Email" 
                      style={{ height: "55px"}} 
                      onChange={(e) => setEmail(e.target.value.trim())}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input 
                      type="text" 
                      className="form-control border-0" 
                      placeholder="Amount &#8358;" 
                      style={{ height: "55px" }} 
                      onChange={(e) => setAmount(parseInt(e.target.value.trim()))}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input 
                      type="text" 
                      className="form-control border-0" 
                      placeholder="Mobile" 
                      style={{ height: "55px" }} 
                      onChange={(e) => setMobile(e.target.value.trim())}
                    />
                  </div>
                  <div className="col-12">
                  <textarea 
                    className="form-control border-0" 
                    placeholder="Special Request"
                    onChange={(e) => setReference(e.target.value.trim())}
                  ></textarea>
                  </div>
                  <div className="col-12">
                    <PaystackButton 
                      className="btn btn-primary w-100 py-3" 
                      amount={amount*100}
                      email={email}
                      publicKey={publicKey!}
                      firstname={name}
                      reference={reference}
                      text={`Give ${naira} ${amount} Now`}
                      onSuccess={() => alert("Thank you for your generosity!")}
                      onClose={() => {}}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Give;