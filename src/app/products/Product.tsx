'use client'

import Image from 'next/image'
import ProductModel from '../models/product'

type ProductProps = {
  product: ProductModel;
  onDelete: (id: string) => void;
}

const formatPrice = ({ amount, currency }: ProductModel['price']) => {
  const symbol = currency === 'USD' ? '$' : '€'
  return `${symbol} ${amount.toFixed(2)}`
}

export default function Product({ product, onDelete }: ProductProps) {
  const { id, name, price, imageUrl } = product
  return (
    <li className="border p-4 rounded shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded text-gray-500">
            No Image
          </div>
        )}

        <div>
          <h2 className="font-medium">{product.name}</h2>
          <p className="text-gray-600">
            {formatPrice(price)}
          </p>
        </div>
      </div>

      <button
      // TODO: call onDelete and pass the product id
        onClick={() => {}} 
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  )
}
