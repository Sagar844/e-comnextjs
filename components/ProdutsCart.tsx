import { Datum } from '@/Types/ProdutsType'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { shimmer, toBase64 } from './Imageblurdata'
import Link from 'next/link'


type produtscartprops = {
    p: Datum
}
const ProdutsCart: NextPage<produtscartprops> = ({ p }) => {

    return (
        <>

            <div className='items-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-green-400 hover:text-white bg-green-400'>
                <Link href={"/products/" + p.id}>
                    <Image className='inline-block  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500' placeholder='blur' blurDataURL={`data:image/svg+xml;
          base64,${toBase64(
                        shimmer(700, 475)
                    )}`} width={200} height={200} alt='20' src={p.thumbnail}></Image>
                    <h1>{p.title}</h1>
                    <h1 className='text-orange-500'>{p.price}</h1>
                </Link>
            </div>
        </>

    )
}
export default ProdutsCart
