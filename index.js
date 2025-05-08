const express = require("express");
const mongoose = require("mongoose");
const product = require("./itemModel");
const Product = require("./itemModel");

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 7000

app.listen(PORT, ()=>{

  console.log(`server started runing on ${PORT}`)
}) 


const MONGODB_URL = "mongodb+srv://Maolbarivule:Maolbarivule@cluster0.zumvy4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(MONGODB_URL)
.then(()=>{

  console.log("Mongodb  connected.....")

  app.listen(PORT, ()=>{

    console.log(`server started runing on ${PORT}`)
  }) 
})



 
  // Drugs array as provided





    
 //const drugs = [

  // { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },

   //{ id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
 
   //{ id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
 
  // { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
 
  // { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
 
  // { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
 
   //{ id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
 
   //{ id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
 
 //{ id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
 
   //{ id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
 
   //{ id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
 
   //{ id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
 
   //{ id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
 
   //{ id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
 
   //{ id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
 
  // { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
 
   //{ id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
 
  //{ id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
 
  // { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
 
   //{ id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, ////manufacturer: "Nature’s Bounty" }
 
 // ];

 //app.get("/",  (req, res)=>{

 // res.json({message: "welcome to drugs server"})
 //})
  


// 1. GET /drugs/antibiotics
//app.get('/drugs/antibiotics', (req, res) => {
 // const antibiotics = drugs.filter(drug => drug.category === 'Antibiotic');
 // res.json(antibiotics);
//});

// 2. GET /drugs/names
//app.get('/drugs/names', (req, res) => {
 // const names = drugs.map(drug => drug.name.toLowerCase());
 // res.json(names);
//});

// 3. POST /drugs/by-category
//app.post('/drugs/by-category', (req, res) => {
//  const { category } = req.body;
 // const filteredDrugs = drugs.filter(drug => drug.category === category);
 // res.json(filteredDrugs);
//});

// 4. GET /drugs/names-manufacturers
//app.get('/drugs/names-manufacturers', (req, res) => {
 // const namesManufacturers = drugs.map(drug => ({
  //  name: drug.name,
  //  manufacturer: drug.manufacturer,
  //}));
  //res.json(namesManufacturers);
//});

// 5. GET /drugs/prescription
//app.get('/drugs/prescription', (req, res) => {
 // const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly);
 // res.json(prescriptionDrugs);
//});

// 6. GET /drugs/formatted
//app.get('/drugs/formatted', (req, res) => {
 // const formattedDrugs = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`);
 // res.json(formattedDrugs);
//});

// 7. GET /drugs/low-stock
//app.get('/drugs/low-stock', (req, res) => {
 // const lowStockDrugs = drugs.filter(drug => drug.stock < 50);
 // res.json(lowStockDrugs);
//});

// 8. GET /drugs/non-prescription
//app.get('/drugs/non-prescription', (req, res) => {
 // const nonPrescriptionDrugs = drugs.filter(drug => !drug.isPrescriptionOnly);
 // res.json(nonPrescriptionDrugs);
//});

// 9. POST /drugs/manufacturer-count
//app.post('/drugs/manufacturer-count', (req, res) => {
 // const { manufacturer } = req.body;
 // const count = drugs.filter(drug => drug.manufacturer === manufacturer).length;
 // res.json({ manufacturer, count });
//});

// 10. GET /drugs/count-analgesics
//app.get('/drugs/count-analgesics', (req, res) => {
  //const analgesicsCount = drugs.filter(drug => drug.category === 'Analgesic').length;
 // res.json({ category: 'Analgesic', count: analgesicsCount });
//});


//asysnc  assnchronous the opposite of synchronous
// what is asysnc?   is a function that runs in the background , they dont stop anything from working everythin will work as normal untill they come back their response. a function that you know that might take a while to complete you need to label it as an asysnc function,becausse it will take a while to comeplet

//SYNCHRONOUSE 
//synchronouse function are normal function that runs one after another 


//await await means wait for that function to complete



//the first api i want to build is to get all the product from the data base 

//app.get("/all-product",  async (req, res)=>{

// const allProducts =  await product.find()

 //res.status(200).json({ 
 // message:"success",
 // allProducts})

//})

//app.post("/create-product", async (req, res)=>{

 // const {name, price, image, quantity, instock   }  = req.body

 // if (!name || !price){
 //   return res.status(400).json({message: "please enter all fields."})
 // }
//const newProduct = new product({name, price, image, quantity,instock})

//await newProduct.save()

//res.status(201).json({
 // message: "sucess",
 // newProduct
//})

  
//})


//a primary key is key that only that particular data owns that key no other itme can share that key
//foreign is key that can be shared example id is a primaey key, 



//app.get("/one-product/:id", async(req, res)=>{
 // const { id } = req.params

  //const product = await Product.findById(id)

 // if(!product){
 //return res.status(404).json({message: " product not found."})
 // }

 // res.status(200).json({

//message: "success",
//    product
//})

//})



//app.put("/edit-product/:id",  async (req, res)=>{


  //const { id } = req.params
  
  //const { name, price, image, quantity,instock } = req.body

  //const updatedProduct = await Product.findByIdAndUpdate(
  //  id,
  //  {name, price, image, quantity, instock   },
    // {new: true}
  //)
  
//res.status(201).json({
 // message:"success",
 // updatedProduct
//})
  
//})



//to update a selected few

//app.patch("/update-product/:id", async (req, res)=>{

//const { id } =  req.params

 // const { name } = req.body

  //const existingProduct = await product.findById(id)

  //if(existingProduct){
 //   existingProduct.name = name

 //   await existingProduct.save()

//    return res.status(200).json({
      //message: " success",
  //    existingProduct
   // })
    
    
  //} else {
   
  //  res.status(404).json({message: "product not found "})
      
      
  
    
 // }
   

//})

//how to delete

//app.delete("/delete-product", async(req, res)=>{

//  const { id } = req.body

 // const deletedProduct = await product.findByIdAndDelete(id)

 // res.status(200).json({message: "success"})
//})


// Add a found item
app.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// View all unclaimed items
app.get('/unclaimed', async (req, res) => {
  try {
    const items = await Item.find({ claimed: false });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// View one item by ID
app.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update item details or mark as claimed
app.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete old/irrelevant entries
app.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app









