const serviceCrown2Controller_93 = require('./serviceCrown2Controller_93');

/* CREATE*/
exports.createProducts = async (req, res) => {
  console.log('body', req.body);
  //res.json('create body received')

  try {
    let results = await serviceCrown2Controller_93.create(req.body);
    console.log('results', JSON.stringify(results));
    res.json('data: {msg: creating successful}');
  } catch (err){

  }

}

/* READ */

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_93.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_93/crown2_93', {
      data: results,
      title: 'Crown2_93',
      name: 'JunKai Huang',
      id: `209410793`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_93.getShop();
    res.render('crown_93/products_93', {
      data,
      title: 'All Products',
      name: 'JunKai Huang',
      id: `209410793`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
     const data = await serviceCrown2Controller_93.getProductsByCategory(req.params.category);
     console.log('getProductsByCategory', JSON.stringify(data));
    res.render('crown_93/products_93', {
      data,
      title: req.params.category,
      name: 'JunKai Huang',
      id: `209410793`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}


/* UPDATE */
exports.updateProducts = async (req, res) => {
  console.log('body', req.body);
  //res.json('create body received')

  try {
    let results = await serviceCrown2Controller_93.update(req.body);
    console.log('results', JSON.stringify(results));
    res.json('data: {msg: updating successful}');
  } catch (err){

  }

}

/* DELETE */

exports.deleteProduct = async (req, res) => {
  console.log('deleteProduct', req.params.id );
  try {
    await serviceCrown2Controller_93.deleteById(req.params.id);
    res.redirect('/crown2_93');

  } catch (err) {
    console.log(err);
  }
}