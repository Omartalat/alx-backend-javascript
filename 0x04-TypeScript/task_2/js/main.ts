interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak?(): string,
  workDirectorTasks(): string,
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number): Director | Teacher {
  if (salary >= 500)
    return new Director();
  return new Teacher();
}

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  return employee instanceof Director ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math')
    return 'Teaching Math'
  else return 'Teaching History'
}
