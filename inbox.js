document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.message');

    messages.forEach(message => {
        const deleteButton = message.querySelector('.delete-button');
        const replyButton = message.querySelector('.reply-button');

        deleteButton.addEventListener('click', function() {
            message.remove();
        });

        replyButton.addEventListener('click', function() {
            const sender = message.querySelector('.sender').textContent;
            const messageContent = message.querySelector('.message-content').textContent;
            alert(`Replying to ${sender}: ${messageContent}`);
            // Implement your reply functionality here (e.g., open a modal, show a reply form, etc.)
        });
    });
});
