import { Field, useFormikContext } from 'formik';

export const FieldFile = ({ id, label, uploader, disabled }) => {
    const { setFieldValue } = useFormikContext()

    const changeHandler = (e) => {
        const file = e.target.files[0]
       
        disabled(true)
        setFieldValue(id, file)
        uploader(file)
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field name={id}>
                {({ meta }) =>
                    <div>
                        <input
                            id={id}
                            type="file"
                            onChange={changeHandler} />
                        {meta.touched && meta.error
                        ? <div>{meta.error}</div>
                        : null}
                    </div>
                }
            </Field>
        </div>
    )
}