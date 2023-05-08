import { NextPage } from 'next'

import React, { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
    className: string

} & ButtonHTMLAttributes<HTMLButtonElement>


const Button: NextPage<ButtonProps> = ({ className, ...rest }) => {
    console.log(className)
    return (
        <div>
            <button {...rest} className={'p-2 rounded-md text-white ' + className} >
            </button>
        </div>
    )
}

export default Button
