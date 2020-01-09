import StudentRepository from '../models/repositories/StudentRepository';

function createStudent(req, res) {
  const student = req.body;

  StudentRepository.create(student)
    .then((newStudent) => {
      console.log( newStudent)
      res.json(newStudent);
    }).catch((errors) => {
      res.status(500).json({
        errors,
      });
    });
}

export default { createStudent };