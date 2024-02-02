import DiscipleshipPageFields from "../constants/fields/disciplePageFields";
import { 
  discipleshipFormSchema, 
} from "./validations/discipleshipFormValidations";

export const PAGES = [
  {
    page: 'discipleship',
    field: DiscipleshipPageFields,
    validationSchema: discipleshipFormSchema,
    initialValues: {
      fullName: '',
      email: '',
      mobile: '',
      message: ''
    },
    pageHeader: 'Get In Touch',
  },
];