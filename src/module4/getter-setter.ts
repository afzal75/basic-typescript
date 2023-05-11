class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id,
            this.name = name,
            this._balance = balance
    }
    // getter

    get balance() : number {
      return  this._balance
    }

    // setter

    set deposit(amount: number) {
        this._balance = this._balance + amount
    }


    getBalance() : number {
        return this._balance
    }
    // addDeposit(amount: number) {
    //     this._balance = this._balance + amount
    // }
}

class StudentsAccount extends BankAccount {
    test() {
        
    }
}

const myAccount = new BankAccount(333, 'JJK', 444444)
// console.log(myAccount)
console.log(myAccount.balance)
myAccount.deposit = 30
console.log(myAccount.balance)