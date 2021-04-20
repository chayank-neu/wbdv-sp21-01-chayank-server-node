const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
        questions.map(question => question.answer === question.correct ?
            numberOfCorrectQuestions++ : numberOfCorrectQuestions)
        return 100 * numberOfCorrectQuestions / questions.length
    }

const findAttemptsForQuiz = (qzid) =>{
    const string4 = new String(qzid);
    quizAttemptsModel.find( { quiz: { $eq: qzid } } )
    return quizAttemptsModel.find({quiz:{$eq: string4}})

}

const createAttempt = (qid, attempt) =>
    quizAttemptsModel.create({ quiz: qid, answers: attempt, score: scoreQuiz(attempt) })


module.exports = { createAttempt, findAttemptsForQuiz }