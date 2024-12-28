// Data JSON
const data = {
  schedule: [
    {
      day: "Monday",
      classes: [
        {
          time: "08:00 - 10:00",
          course: "Mathematics",
          lecturer: "Dr. John Doe",
          room: "A101",
        },
        {
          time: "10:15 - 12:15",
          course: "Physics",
          lecturer: "Prof. Jane Smith",
          room: "B203",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "09:00 - 11:00",
          course: "Programming",
          lecturer: "Mr. Adam Taylor",
          room: "C405",
        },
      ],
    },
  ],
  tasks: [
    {
      title: "Assignment 1",
      course: "Mathematics",
      due_date: "2024-01-10",
      description: "Complete exercises 1 to 5 from Chapter 3.",
    },
    {
      title: "Lab Report",
      course: "Physics",
      due_date: "2024-01-15",
      description: "Submit lab report on Newton's laws.",
    },
  ],
  projects: [
    {
      title: "Final Project",
      course: "Programming",
      due_date: "2024-02-28",
      team_members: ["Alice", "Bob", "Charlie"],
      description: "Develop a web-based task management system.",
    },
  ],
  lecturers: [
    {
      name: "Dr. John Doe",
      email: "john.doe@example.com",
      department: "Mathematics",
    },
    {
      name: "Prof. Jane Smith",
      email: "jane.smith@example.com",
      department: "Physics",
    },
    {
      name: "Mr. Adam Taylor",
      email: "adam.taylor@example.com",
      department: "Computer Science",
    },
  ],
};

// Render Data
document.addEventListener("DOMContentLoaded", () => {
  renderSchedule(data.schedule);
  renderTasks(data.tasks);
  renderProjects(data.projects);
  renderLecturers(data.lecturers);
});

function renderSchedule(schedule) {
  const container = document.getElementById("schedule");
  schedule.forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.className = "border-b pb-2 mb-2";

    const title = document.createElement("h3");
    title.className = "text-xl font-bold";
    title.innerText = day.day;

    const classes = document.createElement("ul");
    day.classes.forEach((cls) => {
      const classItem = document.createElement("li");
      classItem.className = "mt-2";
      classItem.innerHTML = `<strong>${cls.course}</strong> (${cls.time}) - ${cls.lecturer} in ${cls.room}`;
      classes.appendChild(classItem);
    });

    dayElement.appendChild(title);
    dayElement.appendChild(classes);
    container.appendChild(dayElement);
  });
}

function renderTasks(tasks) {
  const container = document.getElementById("tasks");
  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.className = "p-4 bg-gray-50 rounded-md shadow";

    taskElement.innerHTML = `
        <h3 class="text-lg font-semibold">${task.title}</h3>
        <p class="text-sm text-gray-600">Course: ${task.course}</p>
        <p class="text-sm text-gray-600">Due Date: ${task.due_date}</p>
        <p class="mt-2">${task.description}</p>
      `;

    container.appendChild(taskElement);
  });
}

function renderProjects(projects) {
  const container = document.getElementById("projects");
  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "p-4 bg-gray-50 rounded-md shadow";

    projectElement.innerHTML = `
        <h3 class="text-lg font-semibold">${project.title}</h3>
        <p class="text-sm text-gray-600">Course: ${project.course}</p>
        <p class="text-sm text-gray-600">Due Date: ${project.due_date}</p>
        <p class="text-sm text-gray-600">Team Members: ${project.team_members.join(
          ", "
        )}</p>
        <p class="mt-2">${project.description}</p>
      `;

    container.appendChild(projectElement);
  });
}

function renderLecturers(lecturers) {
  const container = document.getElementById("lecturers");
  lecturers.forEach((lecturer) => {
    const lecturerElement = document.createElement("div");
    lecturerElement.className = "p-4 bg-gray-50 rounded-md shadow";

    lecturerElement.innerHTML = `
        <h3 class="text-lg font-semibold">${lecturer.name}</h3>
        <p class="text-sm text-gray-600">Email: ${lecturer.email}</p>
        <p class="text-sm text-gray-600">Department: ${lecturer.department}</p>
      `;

    container.appendChild(lecturerElement);
  });
}
