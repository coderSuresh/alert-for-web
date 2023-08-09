const alertContainer = document.createElement('div');
alertContainer.setAttribute('class', 'popup')

const alertIcon = document.createElement('img');
alertIcon.setAttribute('class', 'popup__icon');

const alertTitle = document.createElement('h2');
alertTitle.setAttribute('class', 'popup__title');

const alertMessage = document.createElement('p');
alertMessage.setAttribute('class', 'popup__message');

const closeButton = document.createElement('button');
closeButton.setAttribute('class', 'popup__close-btn');

alertContainer.appendChild(alertIcon);
alertContainer.appendChild(alertTitle);
alertContainer.appendChild(alertMessage);
alertContainer.appendChild(closeButton);

document.body.appendChild(alertContainer);

type contents = {
    title: string,
    message: string,
    level: 'success' | 'warning' | 'error',
    button: string
}

const showAlert = (popupContents: contents) => {
    
    let { title, message, level, button } = popupContents;

    if (!title || !message || !level || !button) {
        throw new Error('title, message, level, button are required');
    }

    if (level !== 'success' && level !== 'warning' && level !== 'error') 
       level = 'success';

    closeButton.innerText = button;
    alertIcon.setAttribute('src', `/images/ic_${level.toLowerCase()}.png`);
    alertTitle.innerText = title;
    alertMessage.innerText = message;
    alertContainer.setAttribute('class', `popup popup--${level.toLowerCase()} popup--show`);
}

closeButton.addEventListener('click', () => {
    alertContainer.setAttribute('class', 'popup');
});

export default showAlert;