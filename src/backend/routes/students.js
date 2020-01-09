const express = require('express')
require('dotenv').config()
const router = express();

router.get('/', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.context.me.id,
  );
  return res.send(user);
});

router.post('/', async (req, res) => {
    const message = await req.context.models.Message.create({
      text: req.body.text,
      user: req.context.me.id,
    });
    return res.send(message);
  });

export default router;