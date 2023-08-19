import * as yup from 'yup';

export const inviteValidationSchema = yup.object().shape({
  status: yup.string().required(),
  inviter_id: yup.string().nullable(),
  invitee_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
