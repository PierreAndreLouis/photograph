import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

// Options for the PayPal script
const initialOptions = {
    clientId: "AdbWbcmUUFMdCyL56UUm-FSzh9YxNktnvWLUDEESH0_ZIi4ctSA3GA3yhthgMo9tt40qaZ-fDKjTZ4JM",
    currency: "USD",
    environment: "sandbox"  // Set this to "production" for live environment
};

const PaypalConnection = () => {
    return (
        <div>
            {/* <h1>PayPal Integration in React</h1> */}
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: '10.00', // Amount to be charged
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={async (data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert('Transaction completed by ' + details.payer.name.given_name);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default PaypalConnection;
