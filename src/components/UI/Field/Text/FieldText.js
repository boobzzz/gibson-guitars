import { Field } from 'formik';

export const FieldText = ({ id, type, label }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field name={id}>
                {({ field, meta }) =>
                    <div>
                        <input
                            id={id}
                            type={type}
                            autoComplete="off"
                            {...field} />
                        {meta.touched && meta.error
                        ? <div>{meta.error}</div>
                        : null}
                    </div>
                }
            </Field>
        </div>
    )
}