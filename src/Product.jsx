import React, { useState } from 'react'

function Product() {
        const product = [
  {
    id: 1,
    name: "Fresh Spinach Bundle",
    price: "₹60",
    image: "https://media.istockphoto.com/id/2151663450/photo/bundle-of-green-fresh-spinach-leaves-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=9yv9COEZqrjMcCEInAjJ5NbSS1ev6iGR8UMZ7QyVbfs=",
  },
  {
    id: 2,
    name: "Farm-grown Broccoli",
    price: "₹90",
    image: "https://media.istockphoto.com/id/1360836158/photo/broccoli.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kd6eDGRF8d_lgv3SMf-7OYxcaG1nCmGOj3cIAwI0_HY=",
  },
  {
    id: 3,
    name: "Hydroponic Lettuce",
    price: "₹50",
    image: "https://media.istockphoto.com/id/181072765/photo/lettuce-isolated-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=31FSvc0ZqFO4wxrT_bpBdryRxjxEdYaY-M8zM2VYdVA=",
  },
  {
    id: 4,
    name: "Organic Apples (500g)",
    price: "₹110",
    image: "https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=GxR5a1dtDlF0-n6JA1p33uIxXLOzzfKOBr84zEtRtB8=",
  },
  {
    id: 5,
    name: "Cold-Pressed Orange Juice (500ml)",
    price: "₹75",
    image: "https://media.istockphoto.com/id/1489186977/photo/orange-juice-in-a-beautiful-juice-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=X8F5ePTPe9BA7O3UjQDQrraHh2iua2UiS0BaEQoDAr0=",
  },
  {
    id: 6,
    name: "Amla Tulsi Immunity Shot (100ml)",
    price: "₹70",
    image: "https://media.istockphoto.com/id/1253639467/photo/chawanprash-is-an-ayurvedic-immunity-booster-food-supplement-from-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=dZLZ_MDDudQKBWrrm35FuMXlN7K6bHq1pHIEbeLTW-Y=",
  },
  {
    id: 7,
    name: "Rainbow Veggie Bowl",
    price: "₹180",
    image: "https://media.istockphoto.com/id/527794517/photo/fruit-and-vegetable-rainbow.webp?a=1&b=1&s=612x612&w=0&k=20&c=zkQxi3yXdEoEebtgJtAA6xHgSvDu7p-euAyNirEchF8=",
  },
  {
    id: 8,
    name: "Chickpea Protein Salad",
    price: "₹150",
    image: "https://media.istockphoto.com/id/1316824320/photo/healthy-quinoa-black-bean-salad-with-mango-and-avocado.webp?a=1&b=1&s=612x612&w=0&k=20&c=MrCbN5gqa7K0SVMaqU4W7DJXx4xLQ00IEzADCYu7Kas=",
  },
  {
    id: 9,
    name: "Avocado Mixed Greens Salad",
    price: "₹200",
    image: "https://media.istockphoto.com/id/544809990/photo/toast-with-avocado-and-cress.webp?a=1&b=1&s=612x612&w=0&k=20&c=oY_-eDhApInch4HeF_bfuHp6sfgQseBiK3UcDDDIZbE=",
  },
  {
    id: 10,
    name: "Flaxseed Energy Bars (Pack of 2)",
    price: "₹60",
    image: "https://media.istockphoto.com/id/2204501913/photo/a-bar-of-protein-flakes-with-flax-and-sunflower-seeds.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Mkk8ckI7EFJWQQ62LYT3K9II5WY7t0bzgBWhmtD_Dw=",
  },
  {
    id: 11,
    name: "Pumpkin Seed Mix (100g)",
    price: "₹100",
    image: "https://media.istockphoto.com/id/1136632462/photo/yogurt-orange-yogurt.webp?a=1&b=1&s=612x612&w=0&k=20&c=xNZkkLuHnZBdwbLFFrVdqMM-3R-D5-W2zM6ild3U77s=",
  },
  {
    id: 12,
    name: "Dried Banana Bites (100g)",
    price: "₹70",
    image: "https://media.istockphoto.com/id/157194944/photo/dehydrated-banana-snacks.webp?a=1&b=1&s=612x612&w=0&k=20&c=Td_39X4dsf5qKHNGLkLSabBqTpg-IxMH9Y5b8JcGS0M=",
  },

];


  return (
    <div className='pro' id='product'>
        <h1 className='text-center'>Products</h1>
      <div className="product d-flex gap-2 text-center m-5 flex-wrap">
        {product.map((product)=>(
            <div className="card p-2 m-1 my-2 border-none">
                <img src={product.image} alt="" />
                <h5>{product.name}</h5>
                <p>{product.price}</p>
                <button className='btn btn-success'>Buy Now</button>
            </div>
        ))}

      </div>
    </div>
  )
}

export default Product
