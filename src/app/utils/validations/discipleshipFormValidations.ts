import React, { FormEvent } from 'react'
import * as Yup from 'yup'

export const discipleshipFormSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required('Email is required'),
  mobile: Yup.string().required("Phone number is required"),
  message: Yup.string().notRequired()
});