const Sequelize = require('sequelize');

const Rental = require('../../model/sequelize/Rental');
const Client = require('../../model/sequelize/Client');
const Boat = require('../../model/sequelize/Boat');

exports.getRentals = () => {
    return Rental.findAll({
        include: [
            {
                model: Client,
                as: 'client'
            },
            {
                model: Boat,
                as: 'boat'
            }]
    });
};


exports.getRentalById = (rentalID) => {
    return Rental.findByPk(rentalID, {
        include: [
            {
                model: Client,
                as: 'client'
            },
            {
                model: Boat,
                as: 'boat'
            }]
    });
};

exports.createRental = (data) => {
    console.log(JSON.stringify(data));

    return Rental.create({
        client_id: data.client_id,
        boat_id: data.boat_id,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo
    });
};

exports.updateRental = (rentalID, data) => {
    return Rental.update(data, { where: { _id: rentalID } });
}

exports.deleteRental = (rentalID) => {
    return Rental.destroy({
        where: { _id: rentalID }
    });
}

exports.deleteManyRentals = (rentalIDs) => {
    return Rental.find({ _id: { [Sequelize.Op.in]: rentalIDs } })
}