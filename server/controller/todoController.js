import todo from "../models/Todo.js";

export const addTodo = async(req,res) =>{
    try{

        const newTodo = await todo.create({
            data: req.body.data,
            createdAt: Date.now()
        });
        
        await newTodo.save();
        
        res.status(204).json(newTodo);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}


export const getAllTodos = async(req,res) =>{
    try{        
        const todos = await todo.find();
        res.status(200).json(todos);
    }
    catch(err){
        res.status(500).json(err.message);
    }
}
export const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await todo.findById(req.params.id);

        const Todo = await todo.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done }
        )

        await Todo.save();

        return res.status(200).json(Todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateTodo = async(req,res) =>{
    try {

        await todo.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

        const Todo = await todo.findById(req.params.id); 
        return res.status(200).json(Todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


export const deleteTodo = async(req,res) =>{
    try {

        const Todo = await todo.findOneAndDelete(
            { _id: req.params.id }
        )
        return res.status(200).json(Todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}