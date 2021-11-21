import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../blog";
export const Invoice = () => {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
      <h1>Details of {params.invoiceId} </h1>
      <p>Details of {invoice.name} </p>
      <p>Details of {invoice.amount} </p>
      <p>Details of {invoice.due} </p>
    </div>
  );
};