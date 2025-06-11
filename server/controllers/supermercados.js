
const db = require('../models')



async function getSupermercados (req, res) { 
  try {
    const result = await db.Supermercados.findAll({}); 
    res.status(200);
    res.send(result);
  } catch (err) {
    console.log('err', err); 
    res.sendStatus(500);
  }
}

async function postSupermercados (req, res) {
  const { supermercados_name, supermercados_id } = req.body; 

  try {
    const result = await db.Supermercados.create({ supermercados_name, supermercados_id });
    res.status(201); 
    res.send(result);
  } catch (err) {
    console.log('err', err);
    res.sendStatus(500)
  }
}




module.exports = {postSupermercados, getSupermercados};