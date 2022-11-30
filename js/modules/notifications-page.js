export default class NotificationsPage {

    /* ---------------------------------------------------- */
    /* Private properties                                   */
    /* ---------------------------------------------------- */
    #mainElement;
    #clearUnreadBtn;

    /* ---------------------------------------------------- */
    /* constructor                                          */
    /* ---------------------------------------------------- */
    /**
     * @param {HTMLElement} htmlElement 
     */
    constructor(htmlElement) {
        this.#mainElement = htmlElement;
        this.#clearUnreadBtn = this.#mainElement.querySelector('.read-setter');
        this.#clearUnreadBtn.addEventListener('click', this.#clearUnreadMsgs.bind(this));
    }

    /* ---------------------------------------------------- */
    /* Methods                                              */
    /* ---------------------------------------------------- */
    #clearUnreadMsgs() {
        const unreadMsgs = this.#mainElement.querySelectorAll('.notification.unread');
        for (const msg of unreadMsgs) {
            msg.classList.remove('unread');
        }
    }
}