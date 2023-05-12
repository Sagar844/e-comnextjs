import React, { useState } from 'react'
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import Button from './Button';
import { Datum } from '@/Types/ProdutsType';
import { NextPage } from 'next';


type Rozerpayprops = {
    ProdutDeatail: Datum
}


const RozerpaymentGatbay: NextPage<Rozerpayprops> = ({ ProdutDeatail }) => {



    const total = ProdutDeatail.price * 100

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Razorpay = useRazorpay();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handlePayment = useCallback(() => {

        // const order =  10

        console.log("rozerpay")
        const options: any = {
            key: "rzp_test_OjT7zSlYQqcy9M",
            Key_Secret: "rzp_test_OjT7zSlYQqcy9M,SDtf8yWweKhC8BGL8FqzVfed",
            amount: total,
            currency: "INR",
            name: ProdutDeatail.title,
            description: "Test Transaction",
            image: ProdutDeatail.thumbnail,
            // order_id: order,
            handler: (res: any) => {
                console.log(res);
            },
            prefill: {
                name: "Sagar",
                email: "sagarkumar84450@gmail.com",
                contact: "8630819248",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#38bdf8",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [ProdutDeatail.thumbnail, ProdutDeatail.title, Razorpay, total]);

    return (
        <div>
            <Button onClick={handlePayment} className="bg-orange-500 "> BUY NOW</Button>
            {/* <input placeholder='enter name' type="text" value={inputs} onChange={(e) => setinput(e.target.value)} /> */}
        </div>
    )
}

export default RozerpaymentGatbay
