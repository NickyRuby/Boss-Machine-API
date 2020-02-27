const checkMillionDollarIdea = (req,res,next) => {
    const numWeeks = Number(req.body.numWeeks);
    const weeklyRevenue = Number(req.body.weeklyRevenue);
    const totalAmount = numWeeks * weeklyRevenue;

    if (!numWeeks || !weeklyRevenue || isNaN(totalAmount) || totalAmount < 1000000) {
        res.status(400).send();
    }
    else {
        next();
    } 

};

module.exports = checkMillionDollarIdea;
