class App {

    constructor() {
        
    }

    ShowNotification (title, text) {
        let notificationElem = $("#function-notification-modal");

        notificationElem.addClass("is-active");

        notificationElem.find(".message-header").text(title);
        notificationElem.find(".message-body").text(text);
    }
}