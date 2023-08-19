import * as yup from 'yup';

export const userRoleValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  role_id: yup.string().nullable(),
});
