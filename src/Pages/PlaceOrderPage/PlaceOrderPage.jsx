
import { useState } from "react"
import productData from '../../../public/orderProduct.json'
import Container from "../../components/container"

export default function PlaceOrderPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(productData.variants[0])

  const increaseQuantity = () => setQuantity(prev => prev < productData.specifications.Quantity ? prev + 1 : prev)
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  return (
      <Container>
          <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-base-200">
            <img
              src={productData.images[0]}
              alt={productData.name}
              className="object-cover"
              width={600}
              height={600}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {productData.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-base-200">
                <img
                  src={image}
                  alt={`${productData.name} view ${index + 1}`}
                  className="object-cover"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="badge badge-primary">Category: {productData.category}</span>
              <span className="badge badge-outline">Brand: {productData.brand}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Specification:</h2>
            <div className="grid gap-4">
              {Object.entries(productData.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2">
                  <span className="font-medium">{key.replace('_', ' ')}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Storage Variants</h3>
            <div className="flex gap-2">
              {productData.variants.map((variant) => (
                <button
                  key={variant}
                  className={`btn ${selectedVariant === variant ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}GB
                </button>
              ))}
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={productData.store.logo}
                  alt={productData.store.name}
                  width={40}
                  height={40}
                  className="rounded"
                />
                <div>
                  <h3 className="font-semibold">{productData.store.name}</h3>
                  <p className="text-sm text-base-content/70">{productData.store.type}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-base-content/70">Price</p>
                  <p className="text-2xl font-bold">{productData.currency}{productData.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="join border rounded-md">
                    <button className="btn btn-ghost join-item" onClick={decreaseQuantity}>-</button>
                    <span className="join-item px-4 flex items-center justify-center">{quantity}</span>
                    <button className="btn btn-ghost join-item" onClick={increaseQuantity}>+</button>
                  </div>
                  <button className="btn btn-primary flex-1">ADD TO CART</button>
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

