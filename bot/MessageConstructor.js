class MessageConstructor {
    constructor(
        category, 
        title, 
        text, 
        timeLeft, 
        link, 
        offers, 
        id, 
        preferredBudget,
        maxBudget,
        customer,
    ) {
        this.message = "<b>" + title + "</b>\n";
        this.message += text + "\n\n";
        this.message += "Предложений на момент поста: <b>" + offers + "</b>\n";
        this.message += "Осталось времени: " + timeLeft + "\n\n";
        this.message += "<b>Желаемый бюджет: " + preferredBudget + "</b>\n";
        this.message += "Максимальный бюджет: " + maxBudget + "\n";
        this.message += "Псевдоним заказчика: <b>" + customer + "</b>\n\n";
        this.message += "<a href=\"" + link + "\">" + "Заказ №" + id + "</a>\n";
        this.message += "#" + category;

        return this.message
    }
}

module.exports = MessageConstructor