const express = require("express");
const router = express.Router();
const Todo = require('../models/Todo');

//Get all todos
router.get("/", async (req, res) => {
  try{
    const todos = await Todo.find();
    res.status(200).json(todos);
  }
  catch(err){
    res.status(500).json(err);
  }
});
//Get single todo
router.get("/:id", async (req, res) => {
  try{
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json("Todo item does not exist");
    }
    res.status(200).json(todo);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//Add a todo item
router.post("/",async (req, res) => {
  try{
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(200).json(savedTodo);
  }
  catch(err){
    res.status(500).json(err);
  }
});

//Delete a todo item
router.delete("/:id", async (req, res) => {
  try{
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json("Todo item does not exist");
    }
    res.status(200).json("Todo Removed");
  }
  catch(err){
    res.status(500).json(err);
  }
});
router.put("/:id", async (req, res) => {
    try{
      const todo = await Todo.findById(req.params.id);
      if (!todo) {
        return res.status(404).json("Todo item does not exist");
      }
      const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.status(200).json(updatedTodo);
    }
    catch(err){
      res.status(500).json(err);
    }
  });

module.exports = router;
