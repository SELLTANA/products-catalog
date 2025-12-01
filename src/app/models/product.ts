type ProductModel = {
  id: string;
  name: string;
  price: {
    amount: number;
    currency: string;
  };
  imageUrl?: string;
};

export default ProductModel
