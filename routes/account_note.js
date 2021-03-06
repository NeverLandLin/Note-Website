import mongoose from "mongoose";
import express from "express";
import { MemberModel, noteModel } from "../models/schema.js";
const router = express.Router();

router.post("/buyNote", async (req, res) => {
  const { member, note } = req.query;

  let loginMember = await MemberModel.findOne({ name: member });
  let buyNote = await noteModel.findOne({ title: note });
  loginMember.noteBuy = [...loginMember.noteBuy, buyNote._id];
  loginMember.money -= buyNote.price;
  loginMember.save();
  buyNote.hassold += 1;
  buyNote.save();
  console.log(buyNote.author);
  console.log(typeof buyNote.author);
  let authorId = buyNote.author;
  let author = await MemberModel.findOne({ _id: authorId });
  author.money += buyNote.price;
  author.save();

  res.send({ money: loginMember.money });
});

router.post("/addNote", async (req, res) => {
  const { member, title, grade, subject, price, img, description, pdffile, pdffile_preview } = req.body;
  let loginMember = await MemberModel.findOne({ name: member });
  let noteExist = await noteModel.findOne({ title: title });
  if (noteExist) {
    res.send({ msg: "Note exists" });
  } else {
    let author = loginMember._id;

    let rate = -1;
    let hassold = 0;
    const newNote = new noteModel({
      title,
      grade,
      subject,
      author,
      rate,
      price,
      hassold,
      img,
      description,
      pdffile,
      pdffile_preview,
    });
    newNote.save();
    loginMember.ownNote = [...loginMember.ownNote, newNote._id];
    loginMember.save();

    res.send({ msg: "Add a note successfully" });
  }
});

router.post("/fetchAuthor", async (req, res) => {
  // req.query  is only apply to post
  const { id } = req.query;
  let loginMember = await MemberModel.findOne({ _id: id });
  res.send({ authorName: loginMember.name });
});

router.get("/checkHaveBuy", async (req, res) => {
  const { id, memberName } = req.query;
  let loginMember = await MemberModel.findOne({ name: memberName });
  // array
  if (loginMember) {
    let ownNote = loginMember.ownNote;
    let noteBuy = loginMember.noteBuy;
    for (let i = 0; i < ownNote.size; i++) {
      ownNote[i].toString();
    }
    for (let i = 0; i < ownNote.size; i++) {
      noteBuy[i].toString();
    }

    let own = loginMember.ownNote.includes(id);
    let buy = loginMember.noteBuy.includes(id);
    if (own) {
      res.send({ haveBuy: "own" });
    } else if (buy) {
      res.send({ haveBuy: "buy" });
    } else {
      res.send({ haveBuy: "none" });
    }
  } else {
    res.send({ haveBuy: "none" });
  }
});

router.post("/:name/addMoney", async (req, res) => {
  let loginMember = await MemberModel.findOne({ name: req.params.name });
  if (loginMember) {
    loginMember.money += 500;
    loginMember.save();
    res.send({ money: loginMember.money });
  }
});

router.post("/:name/resetMoney", async (req, res) => {
  let loginMember = await MemberModel.findOne({ name: req.params.name });
  if (loginMember) {
    loginMember.money = 0;
    loginMember.save();
    res.send({ money: loginMember.money });
  }
});

export default router;
