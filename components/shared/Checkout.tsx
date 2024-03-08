import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import { Button } from '../ui/button'

import {loadStripe } from '@stripe/stripe-js';
import { checkoutOrder } from '@/lib/actions/order.actions';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type CheckoutProps = {
    event : IEvent,
    userId: string,
}
 
const Checkout = ({ event, userId} : CheckoutProps) => {
    React.useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if(query.get('success')){
            console.log('Order Placed! You will receive an email confirmation.');

            if(query.get('cenceled')){
                console.log('Order Canceled --  continue to shop around and checkout when you are ready.')
            }
        }
    },[]);

    const onCheckout = async () => {
        const order = {
            eventTitle : event.title,
            eventId : event._id,
            price : event.price,
            isFree : event.isFree,
            buyerId : userId
        }

        await checkoutOrder(order);
    }

  return (
    <form action={onCheckout} method="post">
        <Button type="submit" role="link" size="lg" className="button sm:w-fit">
            {event.isFree ? "Get Ticket" : "Buy Ticket"}
        </Button>
    </form>
  )
}

export default Checkout