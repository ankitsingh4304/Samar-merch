import React, { useEffect } from 'react';

const RazorpayButton = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PWhezXuUo0LnBl');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};

const RazorpayButton2 = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PWiLNYsqs9Zebn');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};
const RazorpayButton4 = () => {
    useEffect(() => {
        if (!document.querySelector(`script[src="https://checkout.razorpay.com/v1/payment-button.js"]`)) {
            const script = document.createElement('script');
            script.src = "https://checkout.razorpay.com/v1/payment-button.js";
            script.setAttribute('data-payment_button_id', 'pl_PWiX77tPztUSma');
            script.async = true;

            const form = document.getElementById('razorpay-form');
            form.appendChild(script);
        }
    }, []);

    return (
        <div id="razorpay-button-container">
            <form id="razorpay-form"></form>
        </div>
    );
};


export  {RazorpayButton,RazorpayButton2,RazorpayButton4};

