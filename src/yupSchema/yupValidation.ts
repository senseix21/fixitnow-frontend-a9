import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
    subject: yup.string().required('Oh no! Subject is required'),
    message: yup.string().required('Oh no! Message is required'),
});