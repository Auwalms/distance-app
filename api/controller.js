"use strict";

const projectDetail = require("../package.json");
const distance = require("../service/distance");

const controllers = {
    about: function(req, res) {
        const info = {
            name: projectDetail.name,
            description: projectDetail.description
        };

        res.json(info);
    },

    getDistance: function(req, res) {
        distance.get(req, res, function(error, detail) {
            if (!err) {
                res.json(detail);
            } else {
                res.send(err);
            }
        });
    }
};

module.exports = controllers;
