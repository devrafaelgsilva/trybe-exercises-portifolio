/* Parte II - Pedido de clientes */

/* Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante 
e que precisasse enviar mensagens para os clientes com a informação da compra. 
Para isso, use o seguinte código: */

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

/* 1. Complete a função customerInfo() 
para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'. */

const customerInfo = (order) => {
  const address = "address";
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerName = order["name"];
  const customerPhone = order["phoneNumber"];
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
};

customerInfo(order);

/* 2. Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.':
2.1. Modifique o nome da pessoa compradora para Luiz Silva:
2.2. Modifique o valor total da compra para R$ 50,00: */

const orderModifier = (order) => {
  const newBuyer = order.name = "Luiz Silva";
  const newTotal = order.payment.total = "50";
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
};

orderModifier(order);