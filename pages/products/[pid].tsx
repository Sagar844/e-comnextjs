import Head from "next/head";
import { useRouter } from "next/router";
import { toBase64, shimmer } from "@/components/Imageblurdata";
import Image from "next/image";
import { NextPage } from "next";
import { getProdutsdetail } from "@/api/apis";
import { Datum } from "@/Types/ProdutsType";
import Button from "@/components/Button";

import styles from "@/styles/Home.module.css";
import RozerpaymentGatbay from "@/components/RozerpaymentGatbay";
type pidprops = {
    ProdutsDetail: Datum
};

const pid: NextPage<pidprops> = ({ ProdutsDetail }) => {




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
                <div className="flex justify-around items-center space-x-10">
                    <div className="">
                        <Image
                            className="imagesmovies"
                            height={260}
                            width={300}
                            alt="ss"
                            src={ProdutsDetail.thumbnail}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(700, 475)
                            )}`}
                        ></Image>
                        <div className="flex space-x-8 mt-5">
                            <Button className="bg-[#ff9f00] " >ADD TO CART</Button>
                           <RozerpaymentGatbay ProdutDeatail={ProdutsDetail}/>
                        </div>


                    </div>
                    <div className="space-y-4">
                        <h1 className="font-bold text-2xl"> {ProdutsDetail.title} </h1>
                        <div className="font-bold text-2xl"> ₹{ProdutsDetail.price}</div>
                        <p>{ProdutsDetail.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async (context: { params: any }) => {
    console.log("getseversideprops")
    const { params } = context;
    console.log(params)
    const pid = params.pid;
    console.log(pid)
    const response = await getProdutsdetail(pid);

    return {
        props: {
            ProdutsDetail: response,
        },
    };
};
export default pid;
