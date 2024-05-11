class MessageConstructor {
    constructor(
        category,
        subCategory,
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
        this.message = "<b>" + title + "</b>\n\n";
        this.message += text + "\n\n";
        this.message += "Предложений на момент поста: <b>" + offers + "</b>\n";
        this.message += "Осталось времени: " + timeLeft + "\n\n";
        this.message += "<b>Желаемый бюджет: " + preferredBudget + "</b>\n";
        this.message += "Максимальный бюджет: " + maxBudget + "\n";
        this.message += "Псевдоним заказчика: <b>" + customer + "</b>\n\n";
        this.message += "<a href=\"" + link + "\">" + "Заказ №" + id + "</a>\n\n";
        this.message += "#" + subCategory + "\n";
        this.message += "#" + category;

        return this.message
    }
}

module.exports = MessageConstructor