const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postSeller = async (req, res) => {
    try {
        const result = await prisma.seller.create({
            data: req.body
        })
        res.send(result);
    } catch (err) {
        res.send(err.message)
    }
}

const getSellers = async (req, res) => {
    //we'll come to it later.
}


module.exports = {
    postSeller,
    getSellers
}