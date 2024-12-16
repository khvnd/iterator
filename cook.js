const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"],
]);

const dishes = new Map([
    ["Пицца \"Маргарита\"", "Виктор"],
    ["Пицца \"Пепперони\"", "Виктор"],
    ["Суши \"Филадельфия\"", "Ольга"],
    ["Суши \"Калифорния\"", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"],
]);

const clients = new Map();

const clientAlexey = { name: "Алексей" };
clients.set(clientAlexey, ["Пицца \"Пепперони\"", "Тирамису"]);

const clientMaria = { name: "Мария" };
clients.set(clientMaria, ["Суши \"Калифорния\"", "Пицца \"Маргарита\""]);

const clientIrina = { name: "Ирина" };
clients.set(clientIrina, ["Чизкейк"]);

function getChefForDish(dish) {
    const chef = dishes.get(dish);
    return chef ? `${dish} готовит ${chef}` : `Не найдено повара для блюда ${dish}`;
}

function getClientOrders(client) {
    const orders = clients.get(client);
    if (orders) {
        console.log(`Заказы клиента ${client.name}:`);
        orders.forEach((dish) => {
            console.log(`- ${getChefForDish(dish)}`);
        });
    } else {
        console.log(`Заказы клиента ${client.name} не найдены.`);
    }
}

clients.forEach((_, client) => getClientOrders(client));