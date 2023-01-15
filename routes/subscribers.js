const express = require("express");
const Subscriber = require("../models/subscriber");
const router = express.Router();


//Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

//Getting one
router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber.name)
});

//Creating one
router.post("/", async (req, res) => {
    const subscriber = new Subscriber({
        username: req.body.username,
        password: req.body.password
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch(err){
        res.status(400).json({ message: err.message})
    }
})

async function getSubscriber(req,res,next){
  let subscriber
  try{
    subscriber = await Subscriber.findById(req.params.id)
    if (subscriber == null){
      return res.status(404).json({message: "Cannot find subscriber"})
    }
  } catch (err){
    return res.status(500).json({message:err.message})
  }

  res.subscriber = subscriber
  next()
}

//Updating one
router.patch("/:id", getSubscriber, async(req, res) => {
  if(req.body.name != null){
    res.subscriber.username = req.body.username
  }
  if(req.body.password != null){
    res.subscriber.password = req.body.password
  }
  try{
    const updatedSubsciber = await res.subscriber.save()
    res.json(updatedSubsciber)
  }catch (err){
    res.status(400).json({message: err.message})
  }
});

//Deleting one
router.delete("/:id", getSubscriber, async (req, res) => {
  try{
    await res.subscriber.remove()
    res.json({message: "Deleted Sunscriber"})
  }catch (err){
    res.status(500).json({ message: err.message})
  }
});

module.exports = router;
