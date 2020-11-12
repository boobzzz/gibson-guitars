import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { addAction } from '../../../store/actions';
import { FieldText } from '../../UI/Field/Text/FieldText';
import { FieldTextArea } from '../../UI/Field/TextArea/FieldTextArea';
import { Button } from '../../UI/Button/SubmitBtn/Button';

import classes from './Form.module.css';

const initialValues = {
    img: '',
    name: '',
    desc: '',
    price: ''
}
const validationSchema = Yup.object({
    img: Yup.string().required('Enter item image url'),
    name: Yup.string().required('Enter item title'),
    desc: Yup.string().required('Enter item description'),
    price: Yup.string().required('Enter item price')
})

const ProductForm = ({ addItem }) => {
    const handleSubmit = (values, { resetForm }) => {
        const { img, name, desc, price } = values
        const itemData = {
            _id: nanoid(24),
            img: img,
            name: name,
            desc: desc,
            price: price
        }
        console.log('form');

        addItem(itemData)
        resetForm({ values: '' })
    }

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
                            <FieldText id="img" type="text" label="Item image URL *" />
                            <FieldText id="name" type="text" label="Item title *" />
                            <FieldTextArea id="desc" type="text" label="Item description *" />
                            <FieldText id="price" type="text" label="Item price *" />
                            <Button title="add item" />
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (data) => dispatch(addAction(data))
    }
}

export default connect(null, mapDispatchToProps)(ProductForm);