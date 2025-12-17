import React from 'react'

interface btn{
    label: string,
    onClick: ()=>void,
    disabled:boolean
}
const Button = ({label,onClick,disabled}:btn) => {
  return (
    <div>
        <button onClick={onClick} disabled={disabled}>{label}</button>
    </div>
  )
}

export default Button