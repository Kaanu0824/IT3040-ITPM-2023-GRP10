import React from "react";
import "./ConfirmOrder.css";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BottomTab from "../../more/BottomTab";



const ConfirmOrder = ({ history }) => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);

    const { user } = useSelector((state) => state.user);
    
    let productPrice =  cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    const subtotal = productPrice 
      // eslint-disable-next-line
    const shippingCharges = productPrice > 99 ? 0 : 50;
    
    const totalPrice = subtotal + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
  
      history.push("/process/payment");
    };
  
    
  };
  
  export default ConfirmOrder;
