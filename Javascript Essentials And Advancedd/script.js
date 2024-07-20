var bookingType = document.getElementById('bookingType');
    var userChoice = document.getElementById('userChoice');

    function createNode(element) {
        return document.createElement(element);
    }

    bookingType.addEventListener('change', function() {
        while (userChoice.firstChild) {
            userChoice.removeChild(userChoice.firstChild);
        }

        var dateLabel = createNode('label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Date:';
        userChoice.appendChild(dateLabel);

        var dateInput = createNode('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('id', 'date');
        dateInput.setAttribute('name', 'date');
        userChoice.appendChild(dateInput);

        if (this.value === 'halfDay') {
            var slotLabel = createNode('label');
            slotLabel.setAttribute('for', 'slot');
            slotLabel.textContent = 'Slot:';
            userChoice.appendChild(slotLabel);

            var slotSelect = createNode('select');
            slotSelect.setAttribute('id', 'slot');
            slotSelect.setAttribute('name', 'slot');

            var breakfastOption = createNode('option');
            breakfastOption.setAttribute('value', 'breakfast');
            breakfastOption.textContent = 'Breakfast';
            slotSelect.appendChild(breakfastOption);

            var lunchOption = createNode('option');
            lunchOption.setAttribute('value', 'lunch');
            lunchOption.textContent = 'Lunch';
            slotSelect.appendChild(lunchOption);

            var dinnerOption = createNode('option');
            dinnerOption.setAttribute('value', 'dinner');
            dinnerOption.textContent = 'Dinner';
            slotSelect.appendChild(dinnerOption);

            userChoice.appendChild(slotSelect);
        }

        if (this.value === 'hourly') {
            var timeLabel = createNode('label');
            timeLabel.setAttribute('for', 'time');
            timeLabel.textContent = 'Time:';
            userChoice.appendChild(timeLabel);

            var timeInput = createNode('input');
            timeInput.setAttribute('type', 'time');
            timeInput.setAttribute('id', 'time');
            timeInput.setAttribute('name', 'time');
            userChoice.appendChild(timeInput);
        }
    });
