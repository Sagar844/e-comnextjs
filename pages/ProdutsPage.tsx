/* eslint-disable react-hooks/rules-of-hooks */

import { Datum } from '@/Types/ProdutsType'
import ProdutsCart from '@/components/ProdutsCart'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type HomeProps = {
    Produts: Datum
}


const ProdutsPage: NextPage<HomeProps> = ({ Produts }) => {


    if (!Produts) return <div>Loading...</div>;
    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 items-center gap-4'>
            {Produts.map((p) => {
                return (
                    <div key={p.id}>
                        <ProdutsCart p={p} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProdutsPage
