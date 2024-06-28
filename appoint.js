document.getElementById('addAppointmentButton').addEventListener('click', function() {
    let appointmentInput = document.getElementById('appointmentInput');
    let appointmentDate = document.getElementById('appointmentDate');
    let appointmentTime = document.getElementById('appointmentTime');
    let appointmentText = appointmentInput.value;
    let dateText = appointmentDate.value;
    let timeText = appointmentTime.value;

    if (appointmentText.trim() !== '') {
        let appointmentList = document.getElementById('appointmentList');

        let listItem = document.createElement('li');

        let appointmentDetails = document.createElement('div');
        appointmentDetails.className = 'task-details';
        appointmentDetails.innerHTML = `<strong>${appointmentText}</strong>
                                        <div class="details-boxes">
                                            <div class="date-box">Date: ${dateText}</div>
                                            <div class="reminder-box">Time: ${timeText}</div>
                                        </div>`;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            appointmentList.removeChild(listItem);
        });

        listItem.appendChild(appointmentDetails);
        listItem.appendChild(deleteButton);
        appointmentList.appendChild(listItem);

        // Clear the input fields
        appointmentInput.value = '';
        appointmentDate.value = '';
        appointmentTime.value = '';

        // Sort the appointments
        sortAppointments();
    }
});

function sortAppointments() {
    let appointmentList = document.getElementById('appointmentList');
    let appointments = Array.from(appointmentList.children);

    appointments.sort((a, b) => {
        let dateA = new Date(a.querySelector('.date-box').textContent.split(': ')[1] + ' ' + a.querySelector('.reminder-box').textContent.split(': ')[1]);
        let dateB = new Date(b.querySelector('.date-box').textContent.split(': ')[1] + ' ' + b.querySelector('.reminder-box').textContent.split(': ')[1]);
        return dateA - dateB;
    });

    appointments.forEach(appointment => appointmentList.appendChild(appointment));
}
