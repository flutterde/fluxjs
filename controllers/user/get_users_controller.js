const prisma = require("../../lib/prisma");

exports.getUsersController = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        
        res.status(200).json({ message: 'Request success to users', users: users });
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: error });
    }
}