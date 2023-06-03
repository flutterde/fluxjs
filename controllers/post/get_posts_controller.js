
exports.getPostsController = async (req, res) => {
    try {
        
        res.status(200).json({ message: 'Request success' });
    } catch (error) {
        
        res.status(500).json({ errors });
    }
}