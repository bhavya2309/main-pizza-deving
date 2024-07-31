import { toast } from 'react-toastify';
import { orderService } from "../../modules/order/services/order-service";

export const payWithRazorPay = (email, name, total) => {
  var options = {
    "key": "rzp_test_xQJcS49E6NLbJj", // Enter the Key ID generated from the Dashboard
    "amount": total * 100, // Amount is in currency subunits (convert to paise)
    "currency": "INR",
    "name": "Brain Mentors", // Your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    
    "handler": function (response) {
      orderService(email, response.razorpay_payment_id, 'Success', name, 'Delhi', total);
      toast.success(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      console.log(response);
    },
    "prefill": {
      "name": name,
      "email": email, 
      "contact": "9000090000" // Provide the customer's phone number
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  
  rzp1.on('payment.failed', function (response) {
    toast.error(`Payment Failed! Error: ${response.error.description}`);
  });
}
