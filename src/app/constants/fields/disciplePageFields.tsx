export interface DiscipleshipPageFieldsProp {
  values: {
    fullName: string,
    email: string,
    mobile: string,
    message: string
  },
  onFieldChange: (e: any) => void,
}

const DiscipleshipPageFields = ({ values, onFieldChange,
}: DiscipleshipPageFieldsProp) => {
  return (
    <>
      <div className="col-md-6">
        <div className="form-floating">
          <input 
            type="text" 
            name="fullName"
            value={values.fullName}
            className="form-control" 
            placeholder="Full Name" 
            onChange={onFieldChange}
          />
          <label htmlFor="fullName">Full Name</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <input 
            type="email" 
            className="form-control" 
            value={values.email}
            onChange={onFieldChange}
            name="email"
            placeholder="Your Email" 
          />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input 
            type="text" 
            value={values.mobile}
            onChange={onFieldChange}
            name="mobile"
            className="form-control" 
            placeholder="Mobile Number"
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
            value={values.message}
            onChange={onFieldChange}
          />
          <label htmlFor="message">Special Request</label>
        </div>
      </div>
    </>
  )
};

export default DiscipleshipPageFields