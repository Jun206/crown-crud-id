const Category_93 = require('../../models/crown_93/Category_93');
const Shop_93 = require('../../models/crown_93/Shop_93');

// CREATE

exports.create = async (body) => {

  try {
    return await Shop_93.create(body);
  } catch(err){
    console.log('create', err);
  }
}

// READ

exports.getCategories = async (req, res) => {
  try {
    return await Category_93.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_93.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
   console.log('service', category);
   
   try {
    const cid = await Category_93.fetchCatIdByName(category);
    const results = await Shop_93.fetchByCatId(cid);
    // console.log('sevv getProductsByCategory', JSON.stringify(results));
    return results;
   } catch(err){
     console.log(err);
   }

}


// UPDATE
exports.update = async (body) => {

  try {
    return await Shop_93.updateById(body);
  } catch(err){
    console.log('update', err);
  }
}


// DELETE
exports.deleteById = async (id) => {
  try {
    return await Shop_93.deleteById(id);
  }catch(err){
    console.log(err);
  }

}