
const db = require('../models');
const { Op } = require('sequelize');

async function getItems (req, res) { 
  try {
    const result = await db.Items.findAll({
  order: [
    ['price', 'ASC']
  ]
}); 
    res.status(200);
    res.send(result);
  } catch (err) {
    console.log('err', err); 
    res.sendStatus(500);
  }
}

async function postItems (req, res) {
  const { SupermercadoId, item_name, item_id, price } = req.body; 

  try {
    const result = await db.Items.create({ SupermercadoId, item_name, item_id, price });
    res.status(201); 
    res.send(result);
  } catch (err) {
    console.log('err', err);
    res.sendStatus(500)
  }
}


/*
SELECT * FROM Items
WHERE name LIKE "%TOMATE%" AND name LIKE "%500%" 
*/
async function itemTags (req, res) {
  const tags = req.body.map(tag => {
    return {
    item_name_toLowerCase: { [Op.like]: `%${tag.id.toLowerCase()}%` }
    }
  });
  if (tags.length === 0) {
    return res.json([]);
  }
  console.log('req.body',req.body);
  try {
    console.log(tags);
    const result = await db.Items.findAll({
      where: {
        [Op.and]: tags
      },
      order: [
        ['price', 'ASC']
      ]
});
console.log(result);
    res.status(200);
    res.send(result);
  } catch (err) {
    console.log('err', err); 
    res.sendStatus(500);
  }
}



module.exports = {postItems, getItems, itemTags};