const questions = require("./questions.json")
const questionsModel = require("../../models/questions/questions-model")

const questionsDao = require('../../daos/questions-dao')

const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)


module.exports = {
    findAllQuestions, findQuestionById,
    findQuestionsForQuiz,
}