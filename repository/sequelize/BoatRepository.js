const Client = require("../../model/sequelize/Client");
const Boat = require("../../model/sequelize/Boat");
const Rental = require("../../model/sequelize/Rental");

exports.getBoats = () => {
    return Boat.findAll();
};

exports.getBoatById = (boatID) => {
    return Boat.findByPk(boatID,
        {
            include: [{
                model: Rental,
                as: 'rentals',
                include: [{
                    model: Client,
                    as: 'clients'
                }]
            }]
        });
};

exports.createBoat = (newBoatData) => {
    return Boat.create({
        name: newBoatData.name,
        seats: newBoatData.seats,
        year: newBoatData.year,
        price: newBoatData.price
    });
};

exports.updateBoat = (boatID, boatData) => {
    const name = boatData.name;
    const seats = boatData.seats;
    const year = boatData.year;
    const price = boatData.price;
    return Boat.update(boatData, { where: { _id: boatID } });
};

exports.deleteBoat = (boatID) => {
    return Boat.destroy({
        where: { _id: boatID }
    });

}; 