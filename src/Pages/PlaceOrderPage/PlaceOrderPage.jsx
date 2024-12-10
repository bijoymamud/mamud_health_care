
import { useState } from "react"
import productData from '../../../public/orderProduct.json'
import Container from "../../components/container"
import { Divide } from "lucide-react"

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0])
  const [totalPrice, setTotalPrice] = useState(productData.price)

  const increaseQuantity = () => {
    setQuantity(prev => {
      const newQuantity = prev + 1
      setTotalPrice(productData.price * newQuantity)
      return newQuantity
    })
  }

  const decreaseQuantity = () => {
    setQuantity(prev => {
      const newQuantity = prev > 1 ? prev - 1 : 1
      setTotalPrice(productData.price * newQuantity)
      return newQuantity
    })
  }

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant)
    setTotalPrice(productData.price * quantity)
  }

  return (
    <Container>
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-24 pt-20">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg ">
              <img
                src={productData.images[0]}
                alt={productData.name}
                className="object-cover"
                width={400}
                height={200}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{productData.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="badge badge-primary cursor-pointer">Category: {productData.category}</span>
                <span className="badge badge-outline cursor-pointer">Brand: {productData.brand}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Specifications:</h2>
              <div className="grid gap-4">
                {Object.entries(productData.specifications).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2">
                    <span className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span>
                      {Array.isArray(value) 
                        ? <ul className="list-disc list-inside">
                            {value.map((item, index) => <li key={index}>{item}</li>)}
                          </ul>
                        : typeof value === 'object'
                          ? Object.entries(value).map(([subKey, subValue]) => (
                              <div key={subKey}>
                                {subKey}: {subValue}
                              </div>
                            ))
                          : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-3">
              <h3 className="text-lg font-semibold mb-2"> Variants</h3>
              <div className="flex gap-2">
                {productData.variants.map((variant) => (
                  <button
                    key={variant}
                    className={`btn uppercase ${selectedVariant === variant ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => handleVariantChange(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg shadow-pink-200">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src={productData.store.logo}
                    alt={productData.store.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{productData.store.name}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                  <div className="badge badge-secondary mb-1">Price</div>

                  <div className="text-2xl font-bold flex items-center">
                      <p className="text-xl font-semibold me-1 flex ms-1">{totalPrice} <span className="font-semibold text-base">{productData.currency}</span></p>
                      
                    </div>
                    <p className="text-sm font-semibold text-base-content/70 ">Selected Variant: <span className="uppercase text-black font-semibold">{selectedVariant}</span></p>
                  </div>

                  <div className="flex items-center gap-4 justify-between">
                    <div className="join border rounded-md">
                      <button className="btn btn-ghost join-item" onClick={decreaseQuantity}>-</button>
                      <span className="join-item px-4 flex items-center justify-center">{quantity}</span>
                      <button className="btn btn-ghost join-item" onClick={increaseQuantity}>+</button>
                    </div>
                    <button className="btn btn-primary w-[360px] text-white">ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description:</h3>
              <p className="text-base-content/70">
                {productData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

