const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development...',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions...',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level...',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];


const coursesContainer = document.querySelector('.courses');
const totalCreditsParagraph = document.querySelector('#total-credits');
const buttons = document.querySelectorAll('.course-buttons button');

function renderCourses(courseList) {
  coursesContainer.innerHTML = '';

  courseList.forEach(course => {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course-box');
    if (course.completed) {
      courseDiv.classList.add('completed');
    }

    courseDiv.innerHTML = `
      <h3>${course.subject} ${course.number} - ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
      <p><strong>Status:</strong> ${course.completed ? 'Completed' : 'Not Completed'}</p>
    `;

    coursesContainer.appendChild(courseDiv);
  });


  const totalCredits = courseList.reduce((sum, c) => c.completed ? sum + c.credits : sum, 0);
  totalCreditsParagraph.textContent = `The total credits for courses listed above is ${totalCredits}`;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.textContent.trim();

    if (filter === 'All') {
      renderCourses(courses);
    } else {
      const filtered = courses.filter(c => c.subject === filter);
      renderCourses(filtered);
    }
  });
});

renderCourses(courses);
buttons[0].classList.add('active');
