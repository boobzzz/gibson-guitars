import Modal from 'react-modal';
import { Button } from '../Button/CloseBtn/Button';

const customStyles = {
    overlay: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
        zIndex: 20
    },
    content: {
        position: 'static',
        background: 'white',
        padding: '3em 3em 4em 3em'
    }
}

export const Overlay = (props) => {
    const { isOpen, close, component } = props

    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}>
            {component}
            <Button clicked={close} />
        </Modal>
    )
}