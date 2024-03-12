"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

export default function CheckOutForm({information}) {
  const stripe = useStripe();
  const elements = useElements();


  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) return null;
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 89 },
      });
      const clientSecret = data;

      const {paymentIntent} = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });
      
      if(paymentIntent.id){
        const serverResponse = await axios.put(`http://localhost:3000/api/order`, {trxID: paymentIntent.id, _id: information._id});

        if (serverResponse.data) {
          Swal.fire({
              title: "Received",
              text: "Transaction has been added.",
              icon: "success"
          });

          setShowData(false);
          mutate('http://localhost:3000/api/order');
      }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
}