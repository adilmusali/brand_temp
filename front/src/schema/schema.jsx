import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    image: yup.string().required("* Fill The Image !"),
    name: yup.string().required("* Fill The Name !"),
    job: yup.string().required("* Fill The Job !"),
    desc: yup.string().required("* FIll The Description !"),
  })