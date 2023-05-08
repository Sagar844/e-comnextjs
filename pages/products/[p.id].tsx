import Head from "next/head";
import { useRouter } from "next/router";
import { toBase64, shimmer } from "@/components/Imageblurdata";
import Image from "next/image";
import { NextPage } from "next";
import { getProdutsdetail } from "@/api/apis";
import { Datum } from "@/Types/ProdutsType";
import Button from "@/components/Button";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import styles from "@/styles/Home.module.css";
type pidprops = {
    ProdutsDetail: Datum
};

const pid: NextPage<pidprops> = ({ ProdutsDetail }) => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Razorpay = useRazorpay();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handlePayment = useCallback(() => {

        console.log("rozerpay")
        const options: any = {
            key: "rzp_test_OjT7zSlYQqcy9M",
            Key_Secret:"rzp_test_OjT7zSlYQqcy9M,SDtf8yWweKhC8BGL8FqzVfed",
            amount:ProdutsDetail.price,
            currency: "INR",
            name: ProdutsDetail.title,
            description: "Test Transaction",
            image: ProdutsDetail.thumbnail,
            // order_id: order.id,
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
                color: " #2874f0",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [ProdutsDetail.price, ProdutsDetail.thumbnail, ProdutsDetail.title, Razorpay]);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    console.log("router", router)
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Head>
                <title>{ProdutsDetail.title}</title>

            </Head>
            <div className={styles.main}> 
                <div className="flex justify-around items-center">
                    <div className="">
                        <Image
                            className="imagesmovies"
                            height={260}
                            width={160}
                            alt="ss"
                            src={ProdutsDetail.thumbnail}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(700, 475)
                            )}`}
                        ></Image>
                        <Button onClick={handlePayment} className="bg-orange-500 cu"> Buy Now</Button>

                    </div>
                    <div>
                        <h1 style={{ color: "red" }}> {ProdutsDetail.title} </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async (context: { params: any }) => {
    console.log("getseversideprops")
    const { params } = context;
    const pid = params.pid;
    console.log(pid)
    const response = await getProdutsdetail(2);

    return {
        props: {
            ProdutsDetail: response,
        },
    };
};
export default pid;
