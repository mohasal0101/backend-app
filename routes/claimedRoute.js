'use strict';

const express = require('express');
const { claimed } = require('../models/index.js');
const router = express.Router();

router.get('/claimed', getClaimed);
router.get('/claimed/:id', getClaim);
router.post('/claimed', createClaim);
router.put('/claimed/:id', updateClaim);
router.delete('/claimed/:id', deleteClaim);

async function getClaimed(req, res) {
    let claimedList = await claimed.findAll();
    res.status(200).json(claimedList);
}

async function getClaim(req, res) {
    let id = parseInt(req.params.id);
    let claim = await claimed.findOne({ where: { id: id } });
    res.status(200).json(claim);
}

async function createClaim(req, res) {
    let obj = req.body;
    let claim = await claimed.create(obj);
    res.status(201).json(claim);
}

async function updateClaim(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let claim = await claimed.update(obj, { where: { id: id } });
    res.status(200).json(claim);
}

async function deleteClaim(req, res) {
    let id = parseInt(req.params.id);
    let claim = await claimed.destroy({ where: { id: id } });
    res.status(204).json(claim);
}

module.exports = router;
