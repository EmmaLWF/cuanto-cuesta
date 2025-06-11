// obtener la data en un archivo CSV 
const fs = require('fs');
const csv =require('csv/sync');
const db = require('../models/index')
const items = csv.parse(fs.readFileSync('scripts/input/T1-L-T.csv', 'utf8'), {columns: true, delimiter:',' }); // parse files into an array
items.forEach(async (item) => {
  console.log('creating item', item.product_name);
  const price = Number(item.price_bs);
  if (isNaN(price)) {
    console.log('Price is not a number')
    return
  }
// POST request to server to create item
  const result = await db.Items.create({
    SupermercadoId: item.supermarket, 
    item_name: item.product_name, 
    item_name_toLowerCase: item.product_name_toLowerCase, 
    item_id: item.product_id, 
    price: item.price_bs
  });
  console.log('created item_name successfully')
})

