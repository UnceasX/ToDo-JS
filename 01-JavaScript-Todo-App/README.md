# Project 1: JavaScript Todo App

## End Goal

By the end of this project, you should have a small application where a user can:

- Create tasks
- Mark tasks as completed
- Delete tasks
- Persist tasks after refresh
- Filter completed/pending tasks

---

# Stage 1 — Build the Skeleton

### What you need on the page

Create a page containing:

1. A heading
2. An input box
3. An "Add Task" button
4. An empty area where tasks will appear

Think:

---------------------------------
            Todo App
---------------------------------

[ Enter task here        ]

[ Add Task ]

---------------------------------

• Learn JavaScript

• Complete Elevate

---------------------------------

# Concepts To Learn During This Stage

### DOM Selection

Learn how JavaScript finds elements already present on a page.

Questions you should be able to answer:

- How do I select an input field?
- How do I select a button?
- How do I select a list container?

---

### Event Listeners

Learn how JavaScript reacts when the user does something.

Example thought process:

When button is clicked
↓
Run a function
↓
Get text from input box
↓
Create new task

### Functions

Create a dedicated function responsible for:

Add Task

Do not write everything directly inside the click handler.

Use small reusable functions.

# Milestone 1

When the user types:

Plain Text

Learn JavaScript

Show more lines

and clicks Add,

a new task should appear.

---

# Stage 2 — Delete Functionality

Once adding works:

Each task should have its own delete button.

Visualize:

Plain Text

Learn JavaScript        [Delete]

Finish Elevate         [Delete]

Show more lines

---

### Concepts To Learn

#### Dynamic Elements

The delete buttons do not exist initially.

They are created when tasks are created.

Understand:

Plain Text

Create element
↓
Add text
↓
Attach button
↓
Put everything on page

Show more lines

---

# Milestone 2

User can:

Plain Text

Add task
Delete task

Show more lines

without refreshing.

---

# Stage 3 — Complete Tasks

Add a completion feature.

Example:

Plain Text

✓ Learn JavaScript

~~Finish Elevate~~

Show more lines

Tasks should be visually different after completion.

---

### Concepts To Learn

- CSS classes
- Toggling classes
- Event handling on existing tasks

Ask yourself:

Plain Text

Can I click a task
and change its appearance?

Show more lines

If yes, you're learning DOM manipulation correctly.

---

# Milestone 3

User can:

- Add
- Delete
- Complete

tasks.

---

# Stage 4 — Store Data

Currently everything disappears after refresh.

Problem:

Plain Text

Refresh
↓
All tasks gone

Show more lines

Solution:

Plain Text

Browser Storage
(LocalStorage)

Show more lines

---

### Concepts To Learn

Learn:

Plain Text

Store data
Retrieve data
Convert objects to JSON
Convert JSON back to objects

Show more lines

This is a huge concept and appears later in Angular as well.

---

# Milestone 4

After refresh:

Plain Text

Tasks remain.

Show more lines

---

# Stage 5 — Filters

Add buttons:

Plain Text

All
Completed
Pending

Show more lines

---

### Concepts To Learn

- Array filtering
- Rendering lists
- Separating data from UI

Think:

Plain Text

Tasks Array
↓
Filter
↓
Display Results

Show more lines

---

# Milestone 5

User can view:

Plain Text

All Tasks

Only Completed

Only Pending
