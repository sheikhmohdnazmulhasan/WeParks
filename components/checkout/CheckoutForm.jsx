"use client";

import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CheckOutForm({ information }) {
  const stripe = useStripe();
  const elements = useElements();
  const [postalCode, setPostalCode] = useState('');
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();


    try {
      if (!stripe || !elements) return null;
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 89 },
      });
      const clientSecret = data;

      const card = elements.getElement(CardNumberElement);
      if (!card) {
        return;
      }
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      const { paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
          },
        },
      );

      if (paymentIntent.id) {
        const serverResponse = await axios.put(
          `http://localhost:3000/api/order`,
          { trxID: paymentIntent.id, _id: information._id }
        );
        if (serverResponse.data) {
          Swal.fire({
            title: "Received",
            text: "Transaction has been added.",
            icon: "success",
          });

          router.push('/');

          setShowData(false);
          mutate("http://localhost:3000/api/order");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="px-5 py-2  shadow-xl rounded-md">
      <div className="mb-4">
        <h1 className="text-start font-semibold text-xl">Pay with card</h1>
      </div>
      <div className="mb-3">
        <label className="block text-start font-bold text-sm mb-2 ml-1">
          Email
        </label>
        <input
          className="w-full px-3  py-1 mb-1 border-2 bg-transparent border-gray-200 rounded-md focus:outline-none"
          placeholder="Your Email"
          type="text"
          defaultValue={"username"}
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-start font-bold text-sm mb-2 ml-1">
          Card Information
        </label>
        <CardNumberElement
          id="card-number"
          className="w-full px-3 py-2 mb-1 border-2 border-gray-300 rounded-md"
          options={{
            showIcon: true,
            placeholder: "Card Number",
          }}
        />
      </div>
      <div className="mb-3 -mx-2 md:flex justify-between items-center">
        <div className="px-2">
          <label
            htmlFor="expire-date"
            className="block font-bold text-sm mb-2 ml-1 "
          >
            Expiration date
          </label>
          <CardExpiryElement
            id="expire-date"
            className="px-3 py-2 mb-1 border-2 border-gray-200 rounded-md"
          />
        </div>
        <div className="px-2">
          <label htmlFor="cvc" className="block font-bold text-sm mb-2 ml-1">
            Security code
          </label>
          <CardCvcElement
            id="cvc"
            className="w-24 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md"
          />
        </div>
        <div className="px-2">
          <label
            htmlFor="postal-code"
            className="block font-bold text-sm mb-2 ml-1"
          >
            Postal code
          </label>
          <input
            onChange={(e) => setPostalCode(e.target.value)}
            id="postal-code"
            required
            maxLength={5}
            placeholder="POST"
            className="w-24 px-3 py-1 mb-1 border-2 bg-transparent border-gray-200 rounded-md focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-start font-bold text-sm mb-2 ml-1">
          Cardholder name
        </label>
        <input
          className="w-full px-3  py-1 mb-1 border-2 bg-transparent border-gray-200 rounded-md focus:outline-none"
          placeholder="Full name on card"
          type="text"
          required
        />
      </div>
      <button
        className="btn w-full bg-blue-700 text-white rounded-md text-xl"
        type="submit"
      >
        Pay
      </button>
    </form>
  );
}
