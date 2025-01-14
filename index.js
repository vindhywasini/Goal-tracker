const goalList = document.getElementById('goal-list');
const completedCount = document.getElementById('completed-count');
const pendingCount = document.getElementById('pending-count');
const inProgressCount = document.getElementById('in-progress-count');

function addGoal() {
    const goalInput = document.getElementById('goal-input');
    const prioritySelect = document.getElementById('priority-select');
    const goalValue = goalInput.value.trim();
    const priority = prioritySelect.value;

    if (!goalValue) {
        alert('Please enter a goal!');
        return;
    }

    const goalItem = document.createElement('li');
    goalItem.classList.add('goal-item', priority);

    // Goal text
    const goalText = document.createElement('span');
    goalText.textContent = `${goalValue} (${priority.charAt(0).toUpperCase() + priority.slice(1)})`;
    goalItem.appendChild(goalText);

    // Dropdown for status
    const statusDropdown = document.createElement('select');
    statusDropdown.innerHTML = `
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
    `;
    statusDropdown.onchange = () => {
        updateCounters();
    };
    goalItem.appendChild(statusDropdown);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => {
        goalItem.remove();
        updateCounters();
    };
    goalItem.appendChild(deleteButton);

    goalList.appendChild(goalItem);
    goalInput.value = '';
    updateCounters();
}

function updateCounters() {
    const goals = document.querySelectorAll('.goal-item');
    const completed = [...goals].filter(goal => goal.querySelector('select').value === 'completed').length;
    const pending = [...goals].filter(goal => goal.querySelector('select').value === 'pending').length;
    const inProgress = [...goals].filter(goal => goal.querySelector('select').value === 'in-progress').length;

    completedCount.textContent = completed;
    pendingCount.textContent = pending;
    inProgressCount.textContent = inProgress;
}

// Calendar Planner
const datePicker = document.getElementById('date-picker');
const eventDescriptionInput = document.getElementById('event-description');
const dateEventList = document.getElementById('date-event-list');

function addDateEvent() {
    const selectedDate = datePicker.value;
    const eventDescription = eventDescriptionInput.value.trim();

    if (!selectedDate) {
        alert('Please select a date!');
        return;
    }

    if (!eventDescription) {
        alert('Please enter an event description!');
        return;
    }

    const eventItem = document.createElement('li');

    // Event text
    const eventText = document.createElement('span');
    eventText.textContent = `${selectedDate}: ${eventDescription}`;
    eventItem.appendChild(eventText);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => {
        eventItem.remove();
    };
    eventItem.appendChild(deleteButton);

    dateEventList.appendChild(eventItem);

    // Clear inputs
    datePicker.value = '';
    eventDescriptionInput.value = '';
}


// Dark Mode
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

