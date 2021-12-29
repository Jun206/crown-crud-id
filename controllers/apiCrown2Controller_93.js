const serviceCrown2Controller_93 = require('./crown_93/serviceCrown2Controller_93');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_93.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_93.getShop();
    return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
     const data = await serviceCrown2Controller_93.getProductsByCategory(req.params.category);
    //  console.log('getProductsByCategory', JSON.stringify(data));
     return res.json(data);
  } catch (err) {
    res.status(404).json(err);
  }
}