const quizzes = require("./quizzes.json")
const quizzesModel = require("../../models/quizzes/quizzes-model")

const quizzesDao = require('../../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)
module.exports = { findAllQuizzes, findQuizById }
