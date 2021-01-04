import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { FieldText } from '../../UI/Field/Text/FieldText';
import { FieldTextArea } from '../../UI/Field/TextArea/FieldTextArea';
import { FieldFile } from '../../UI/Field/File/FieldFile';
import { Button } from '../../UI/Button/SubmitBtn/Button';
import { getImgUrl, getIsDisabled } from '../../../store/selectors';
import { disableAction, uploadAction, submitAction } from '../../../store/actions';
import { useForm } from './useForm';
import classes from './Form.module.css';

const initialValues = {
    name: '',
    desc: '',
    price: 0,
    img: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('Enter item title'),
    desc: Yup.string().required('Enter item description'),
    price: Yup.number().required('Enter item price'),
    img: Yup.mixed().required('Choose file image to upload')
})

const ProductForm = (props) => {
    const { isDisabled, imgUrl, setDisabled, uploadFile, storeProduct } = props
    const { btn, handleSubmit } = useForm(isDisabled, imgUrl, storeProduct)
    
    return (
        <div className={classes.Form}>
            <h3>Enter product data:</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {() => {
                    return (
                        <Form>
                            <FieldText id="name" type="text" label="Item title *" />
                            <FieldTextArea id="desc" type="text" label="Item description *" />
                            <FieldText id="price" type="text" label="Item price *" />
                            <FieldFile id="img" label="Choose image *" uploader={uploadFile} disabled={setDisabled} />
                            <Button title={btn} disabled={isDisabled} />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isDisabled: getIsDisabled(state),
        imgUrl: getImgUrl(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDisabled: (value) => dispatch(disableAction(value)),
        uploadFile: (file) => dispatch(uploadAction(file)),
        storeProduct: (data) => dispatch(submitAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);