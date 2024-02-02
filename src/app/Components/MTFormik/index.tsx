import { DiscipleshipPageFieldsProp } from "@/app/constants/fields/disciplePageFields";
import { Form, Formik } from "formik";
import React from "react";

const MTFormik = ({ 
  PageFields, 
  pageHeader,
  formikSubmit,
  initFormValues,
  onFieldChange,
  formData
}: { 
  PageFields: React.FC<DiscipleshipPageFieldsProp>, 
  pageHeader: string,
  formikSubmit: (values: any, actions: any) => void,
  initFormValues: any,
  onFieldChange: (e: any) => void,
  formData: any
}) => {
  return (
    <Formik
      onSubmit={formikSubmit}
      initialValues={initFormValues}
    >
      <div className="m-3">
        <h6 className="text-secondary text-uppercase">{pageHeader}</h6>
        <div className="bg-light p-3 h-40 d-flex align-items-start w-100">
          <Form>
            <div className="row g-3">
              <PageFields 
                values={formData} 
                onFieldChange={onFieldChange}
              />
              <div className="col-12">
                <button 
                  className="btn btn-primary w-100 py-3"
                  type="submit"
                >
                  Send Messsage
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

// export default MTFormik;