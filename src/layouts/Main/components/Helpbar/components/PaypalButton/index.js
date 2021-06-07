import { Box } from "@material-ui/core";
import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

function PaypalButton(props) {
  return (
    <Box style={{width: '100%'}}>
      <PayPalButton
        shippingPreference="NO_SHIPPING"
        style={{
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          label: 'pay',
        }}
        createOrder={function (data, actions) {
          return actions.order.create({
            purchase_units: [{ "description": "Solicitud de estudios", "amount": { "currency_code": "MXN", "value": props.total, "breakdown": { "item_total": { "currency_code": "MXN", "value": (props.total / 1.16).toFixed(2) }, "shipping": null, "tax_total": { "currency_code": "MXN", "value": ((props.total / 1.16) * 0.16).toFixed(2) } } } }]
          });
        }}

        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
        }}
        onError={function (err) {
          console.log(' -------------------->  ', err);
        }}
        locale={'es_MX'}
        currency='MXN'
        options={{
          buyerCountry:'MX',
          locale: 'es_MX',
          shippingPreference: 'NO_SHIPPING',
          clientId:
            "AT5JdxDXd-bg1Ogq7j0m5z42c43dy8bvnPvPlhbaxN9GthTDUxydDQzKeCXooNsxAJjWc1NauwX2n__X"
        }}
        onSuccess={(details, data) => {
          console.log("Details---------->", details);
          console.log("Data------------->", data);
        }}
      />
    </Box>
  )
}
export default PaypalButton;