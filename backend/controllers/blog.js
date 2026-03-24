const APIHealth = (req,res) => {
    res.status(200).json({ health: "The API is healthy"} );
};

module.exports = { APIHealth };