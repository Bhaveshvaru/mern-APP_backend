const express = require('express');
const router = express();
const {
  getCategoryById,
  createCategory,
  getCategory,
  getALLCategory,
  updateCategory,
  removeCategory,
} = require('../controllers/category');
const { isSignedIn, isAdmin, isAuthenticated } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');

//params
router.param('userId', getUserById);
router.param('categoryId', getCategoryById);

//main routes will go here

//create route
router.post(
  '/category/create/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);
//read routes
router.get('/category/:categoryId', getCategory);
router.get('/categories', getALLCategory);
//update router
router.put(
  '/category/:categoryId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

//delete
router.delete(
  '/category/:categoryId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
);

module.exports = router;
