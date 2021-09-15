/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
let i = 0;
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transactionObject = {};
    i += 1;
    transactionObject.id = i;
    transactionObject.type = type;
    transactionObject.amount = amount;
    console.log(transactionObject);
    return transactionObject;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount <= 0) {
      console.log('Введите суму больше нуля');
      return;
    }
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, 'deposit'));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств.');
      return;
    }
    if (amount <= 0) {
      console.log('Введите суму больше нуля');
      return;
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, 'withdraw'));
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return console.log(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return console.log(transaction);
      }
    }
    return console.log('Транзакции с таким индивидуальным номером ещё нет');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return console.log(total);
  },
};

const inputAmount = document.querySelector('.amount');
const inputId = document.querySelector('.id');
const inputType = document.querySelector('.type');
const depositBtn = document.querySelector('.deposit-button');
const withdrawBtn = document.querySelector('.withdraw-button');
const balanceBtn = document.querySelector('.balance');
const detailsBtn = document.querySelector('.details-button');
const totalBtn = document.querySelector('.transactionTotal-button');
depositBtn.addEventListener('click', function() {
  account.deposit(Number(inputAmount.value));
});
withdrawBtn.addEventListener('click', function() {
  account.withdraw(Number(inputAmount.value));
});
balanceBtn.addEventListener('click', function() {
  account.getBalance();
});
detailsBtn.addEventListener('click', function() {
  account.getTransactionDetails(Number(inputId.value));
});
totalBtn.addEventListener('click', function() {
  account.getTransactionTotal(inputType.value);
});
