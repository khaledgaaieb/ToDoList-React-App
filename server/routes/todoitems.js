const router = require('express').Router()
const toDoItemSchema = require ('../models/todoitems')

//add an item
router.post('/api/AddItem',async (req,res)=>{ //using async to wait when dealing with promises and database
    try {
        const newItem = new toDoItemSchema({
            item:req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    } catch (error) {
        res.json(error)
    }
})

//retrieve items
router.get('/api/getItems',async (req,res)=>{
    try {
        const allTodoItems = await toDoItemSchema.find({})
        res.status(200).json(allTodoItems)
    } catch (error) {
        res.json(error)
    }
})

router.put('/api/updateItem/:id',async (req,res)=>{
    try {
        //find the item by its id 
        const itemToUpdate = await toDoItemSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(itemToUpdate)
    } catch (error) {
        res.json(error)
    }   
})

router.delete('/api/deleteItem/:id',async(req,res)=>{
    try {
        const itemToDelete = await toDoItemSchema.findByIdAndDelete(req.params.id)
        res.status(200).json("item deleted !")
    } catch (error) {
        res.json(error)
    }
})

module.exports = router