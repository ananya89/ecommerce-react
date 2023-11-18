import express from 'express';
const router = express.Router();

router.post('/', (req, res) =>{
    const product = [{
        id: 'men',
        name: 'Men'
    },
    {
        id: 'women',
        name: 'Women'
    }]

    res.send(product);
});

export default router;
