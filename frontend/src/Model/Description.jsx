import React from 'react'
import Card from '../Components/Card'

const Description = () => {
  return (
    <div className='font-primary pt-20 pb-20 bg-bgColor flex flex-col gap-14'>
        <h1 className='text-center text-5xl font-semibold '>ENJOY YOUR BEAUTIFUL DAY & NIGHT</h1>
        <div className='flex flex-wrap justify-evenly '>
            <Card title="Kartik" location="Hamirpur, India" image="/hero-1.png" price="1300" />
            <Card title="Sharma" location="Shimla, India" image="/hero-2.png" price="2100" />
            <Card title="Kings" location="Kasol, India" image="/hero-3.png" price="500" />
            <Card title="Bunty" location="Kullu, India" image="/hero1.jpeg" price="2500" />
        </div>
    </div>
  )
}

export default Description