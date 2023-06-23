class Student {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  enroll(course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
      console.log(`Enrolled in course: ${course}`);
    } else {
      console.log(`Already enrolled in course: ${course}`);
    }
  }

  drop(course) {
    const courseIndex = this.courses.indexOf(course);
    if (courseIndex !== -1) {
      this.courses.splice(courseIndex, 1);
      console.log(`Dropped course: ${course}`);
    } else {
      console.log(`Not enrolled in course: ${course}`);
    }
  }

  displayCourses() {
    console.log(`${this.name}'s enrolled courses:`);
    for (const course of this.courses) {
      console.log(course);
    }
  }
}

const student = new Student("John Doe");
student.enroll("Mathematics");
student.enroll("Physics");
student.enroll("Computer Science");
student.displayCourses();
student.drop("Physics");
student.displayCourses();
