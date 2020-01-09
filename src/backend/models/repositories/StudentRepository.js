import Student from '../Student';

class StudentRepository {

  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}

export default new StudentRepository(Student);