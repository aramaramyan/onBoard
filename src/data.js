const boards = [
  {
    id: 1,
    title: "JS",
    description: "PicsArt",
    bgImage: "image.png"
  },
  {
    id: 2,
    title: "HTML",
    description: "PicsArt",
    bgImage: "image.png"
  },
  {
    id: 3,
    title: "CSS",
    description: "PicsArt",
    bgImage: "image.png"
  },
];

const status = {
  TODO: "todo",
  DOING: "doing",
  DONE: "done",
};

const priority ={
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const tasks = [
  {id: 1, title: "task 1", description: "description1", status: status.TODO, priority: priority.LOW},
  {id: 2, title: "task 2", description: "description2", status: status.TODO, priority: priority.MEDIUM},
  {id: 3, title: "task 3", description: "description3", status: status.TODO, priority: priority.HIGH},
  {id: 4, title: "task 4", description: "description4", status: status.DOING, priority: priority.LOW},
  {id: 5, title: "task 5", description: "description5", status: status.DOING, priority: priority.MEDIUM},
  {id: 6, title: "task 6", description: "description6", status: status.DONE, priority: priority.HIGH},
];


