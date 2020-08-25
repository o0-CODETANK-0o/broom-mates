import * as Yup from 'yup'

const loginSchema = Yup.object({
  wgName: Yup.string().required("Choose a wg name"),
  email: Yup.string().required("Email required").email("Wrong Format"),
  password: Yup.string().required("Password required").min(3, "Min 3 chars").max(5, "Max 5 chars"),
})

export default loginSchema