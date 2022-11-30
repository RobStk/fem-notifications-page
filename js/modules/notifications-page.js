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
        const unreadMsgsCounter = this.#mainElement.querySelector('.counter');

        for (const msg of unreadMsgs) {
            msg.classList.remove('unread');
        }
        unreadMsgsCounter.textContent = '0';
    }
}