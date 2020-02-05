import React from 'react';
import {CardForm} from 'react-payment/dist/CardForm';
import {Modal} from 'reactstrap';

const PaymentForm = () => {
    return(
        <Modal isOpen={true}>
            <CardForm/>
        </Modal>
    )
}

export default PaymentForm;