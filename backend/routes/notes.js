import express from 'express';
import Note from'../models/note.js'
import { protect } from '../middleware/auth.js';

const router = express.Router();

//get all notes
router.get('/',protect,async(req,res)=>{
    try{
        const newNotes = await Note.find({ createdBy: req.user._id });
        res.json(newNotes);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

// create a notes 

router.post('/',protect,async(req,res)=>{
    const{title,description}=req.body;
    try{
        if(!title || !description){ 
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const note = await Note.create({
            title,
            description,
            createdBy: req.user._id
        });
        res.status(201).json(note);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
})
//get a notes 
router.get('/:id',protect,async(req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({ message: "Note not found" });
        }
        if(note.createdBy.toString() !== req.user._id.toString()){
            return res.status(401).json({ message: "Not authorized" });
        }
        res.json(note);

    }catch(err){
         res.status(500).json({ message: err.message });
    }
})
//update a notes
router.put('/:id',protect,async(req,res)=>{
    const { title, description } = req.body;
    try{
        const notes =await Note.findById(req.params.id);
        if(!notes){
            return res.status(404).json({ message: "Note not found" });
        }
        if(notes.createdBy.toString() !== req.user._id.toString()){
            return res.status(401).json({ message: "Not authorized" });
        }
        notes.title = title || notes.title;
        notes.description = description || notes.description;
        const updatedNote = await notes.save();
        res.json(updatedNote);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
})

//delete  notes
router.delete("/:id", protect, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await Note.findByIdAndDelete(req.params.id);

    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
