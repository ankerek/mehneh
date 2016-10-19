import { Schema, arrayOf } from 'normalizr';

export const productSchema = new Schema('products');
export const productsSchema = arrayOf(productSchema);