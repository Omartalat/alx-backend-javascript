namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number
  }

  class React {
    getRequirements(): string {
      return 'Here is the list of requirements for React'
    }

    getAvailableTeacher(): string {
        return this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
    }
  }
}