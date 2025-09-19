import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.post('/products', ctrlWrapper(createProductController));

router.get('/products/:productId', ctrlWrapper(getProductByIdController));

router.patch('/products/:productId', ctrlWrapper(updateProductController));

router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;
