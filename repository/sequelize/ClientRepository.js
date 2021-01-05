const Client = require("../../model/sequelize/Client");
const Boat = require("../../model/sequelize/Boat");
const Rental = require("../../model/sequelize/Rental");

exports.getClients = () => {
    return Client.findAll();
};

exports.getClientById = (clientID) => {
    return Client.findByPk(clientID,
        {
            include: [{
                model: Rental,
                as: 'rentals',
                include: [{
                    model: Boat,
                    as: 'boat'
                }]
            }]
        });
};

exports.createClient = (newClientData) => {
    return Client.create({
        firstName: newClientData.firstName,
        lastName: newClientData.lastName,
        email: newClientData.email
    });
};

exports.updateClient = (clientID, clientData) => {
    return Client.update(clientData, { where: { _id: clientID } });
};

exports.deleteClient = (clientID) => {
    return Client.destroy({
        where: { _id: clientID }
    });

}; 