'use strict';

module.exports = {
    addDog: addDog
};

function addDog (req, res) {
    var data = req.body

    res.json({data: data})
}
