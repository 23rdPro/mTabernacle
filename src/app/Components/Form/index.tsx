import { PAGES } from "@/app/utils/exports";
import { Formik, Form } from "formik";
import { usePathname } from "next/navigation";
import React from "react";
import * as Yup from 'yup'

interface PageProps {
  onSubmit: (values: any) => void; 
  onFieldChange: (value: any) => void,
  validationSchema: Yup.Schema<any>; 
  pageHeader: string;
  initialValues: any; 
  formValues: {}
}

// const MTFormik: React.FC<PageProps> = ({
//   onSubmit,
//   onFieldChange,
//   validationSchema, pageHeader, initialValues, formValues
// }) => {
//   const pathName = usePathname();
//   const Field = React.useMemo<React.FC<any> | null>(() => {
//     const getPageName = (): string => {
//       const trimmedPathName = pathName.replace(/^\/|\/$/g, '');
//       // Split the pathName into segments
//       const segments = trimmedPathName.split('/');
//       // Get the last segment
//       const urlName = segments[segments.length - 1];
//       return urlName;
//     };
//     const filterPages = (name: string): React.FC | null => {
//       const filtered = PAGES.filter(page => page.page === name);
//       return filtered.length > 0 ? filtered[0].field : null;
//     };
//     return filterPages(getPageName());
//   }, [pathName]);
//   return (
//       <Formik 
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationSchema={validationSchema}
//       >
//         <div className="m-3">
//           <h6 className="text-secondary text-uppercase">{pageHeader}</h6>
//           <div className="bg-light p-3 h-40 d-flex align-items-start w-100">
//             <Form>
//               <div className="row g-3">
//                 { 
//                   Field && 
//                   ( <Field 
//                       values={formValues} 
//                       onFieldChange={onFieldChange} 
//                     /> 
//                   )
//                 }
//                 <div className="col-12">
//                   <button 
//                     className="btn btn-primary w-100 py-3"
//                     type="submit"
//                   >
//                     Send Messsage
//                   </button>
//                 </div>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </Formik>
//   )
// };

// export default MTFormik;
