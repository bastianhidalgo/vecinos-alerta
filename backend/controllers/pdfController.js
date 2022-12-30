const acta=require('../models/acta');
const express = require('express');
const app = express();

async function create(req, res) {
    const { title, author } = req.body;
    const file = req.file;
  
    try {
      await createPDF(title, author, file.buffer);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  async function get(req, res) {
    const { id } = req.params;
  
    try {
      const pdf = await getPDF(id);
      res.setHeader("Content-Type", "application/pdf");
      res.send(pdf.file);
    } catch (error) {
      res.sendStatus(500);
    }
  }

async function update(req, res) {
    const { id } = req.params;
    const { title, author } = req.body;
  
    try {
      await updatePDF(id, title, author);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

async function remove(req, res) {
    const { id } = req.params;
  
    try {
      await deletePDF(id);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }
module.exports={
    create,
    get,
    update,
    remove
}