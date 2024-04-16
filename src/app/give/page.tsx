'use client';

import React from "react";
import { PaystackButton } from "react-paystack";

const Give = () => {
  const options = ['50', '100', '200', '500', '1000', 'Custom'];
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
  const [amount, setAmount] = React.useState(50)
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const naira = '₦'
  
  return (
    <div className="container-fluid px-0" >
      <div className="video wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="text-white mb-4">Thank You for Your Generosity</h1>
      </div>
      <div 
        className="container position-relative wow fadeInUp" 
        data-wow-delay="0.1s" 
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-1">Give</h1>
              <p className="mb-3">Give your offerings, tithes and special givings.</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input 
                      type="text" 
                      className="form-control border-0" 
                      placeholder="Your Name" 
                      style={{ height: "55px" }} 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input 
                      type="email" 
                      className="form-control border-0" 
                      placeholder="Your Email" 
                      style={{ height: "55px"}} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <select 
                      className="form-select border-0" 
                      style={{ height: "55px" }}
                      onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                    >
                      {options.map((opt) => (
                        <option 
                          value={`${opt}`} 
                          key={`${opt}`}
                        >
                          {`${opt}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <PaystackButton 
                      className="btn btn-primary w-100 py-3" 
                      amount={amount}
                      email={email}
                      publicKey={publicKey!}
                      firstname={name}
                      text={`Give ${naira}${amount} Now`}
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