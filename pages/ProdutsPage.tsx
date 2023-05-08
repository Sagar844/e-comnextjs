
import { Datum } from '@/Types/ProdutsType'
import ProdutsCart from '@/components/ProdutsCart'
import { NextPage } from 'next'
import React from 'react'

type HomeProps = {
    Produts: Datum
}


const ProdutsPage: NextPage<HomeProps> = ({ Produts }) => {

    return (
        <div className='grid grid-cols-2 lg:grid-cols-5 items-center gap-4'>
            {Produts.map((p: Datum) => {
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
