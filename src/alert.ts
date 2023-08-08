const alertContainer = document.createElement('div');
alertContainer.setAttribute('class', 'popup')

const alertIcon = document.createElement('img');
alertIcon.setAttribute('class', 'popup__icon');

const alertTitle = document.createElement('h2');
alertTitle.setAttribute('class', 'popup__title');

const alertMessage = document.createElement('p');
alertMessage.setAttribute('class', 'popup__message');

const closeButton = document.createElement('button');
closeButton.setAttribute('class', 'popup__close');

alertContainer.appendChild(alertIcon);
alertContainer.appendChild(alertTitle);
alertContainer.appendChild(alertMessage);
alertContainer.appendChild(closeButton);

document.body.appendChild(alertContainer);

type contents = {
    title: string,
    message: string,
    level: string,
    button: string
}

const showAlert = (popupContents: contents) => {
    
    const { title, message, level, button } = popupContents;

    closeButton.innerText = button;
    alertIcon.setAttribute('src', `/images/ic_${level}.png`);
    alertTitle.innerText = title;
    alertMessage.innerText = message;
    alertContainer.setAttribute('class', `popup popup--${level}`);
    alertContainer.setAttribute('class', 'popup popup--show');
}

closeButton.addEventListener('click', () => {
    alertContainer.setAttribute('class', 'popup');
});

export default showAlert;