import { NextPage } from 'next'

import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
    className: string

} & ButtonHTMLAttributes<HTMLButtonElement>


const Button: NextPage<ButtonProps> = ({ className, ...rest }) => {
    // console.log(className)
    return (
        <div>
            <button {...rest} className={'px-4 py-1 rounded-sm text-white cursor-pointer ' + className} >
            </button>
        </div>
    )
}

export default Button
