namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  class Cpp extends Subjects {
    getRequirements(): string {
      return 'getRequirements ';
    }

    getAvailableTeacher(): string {
        return this.teacher.experienceTeachingC > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }

}
