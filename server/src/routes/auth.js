import { Router } from 'express';

let router = Router();

router.post('/login', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body);
    res.sendStatus(200);
});

export default router;