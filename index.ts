// Класс игрока с модификаторами private, public, protected
// public - значение по умолчанию
// private - для использования внутри конкретного класса
// #(private) - тоже приватное свойство, но с помощью спец символа
// protected - приватное свойство распространяемое на потомков
class Player {
    // свойства игрока
    #login;
    _password;
    server;
    consent;

    // getter
    get password() {
        return this._password;
    }

    // setter
    set password(newPass: string) {
        // Validation
        this._password = newPass;
    }
}

const test = new Player();

// Наследования Player (extends)
class CompetitivePlayer extends Player {
    rank: number;

    private isConsented() {
        this.consent ? "yes" : "no";
    }
}

// Экземпляр нового игрока
const player = new Player();
// Изменяем значение пароля с помощью setterа
player._password = "12345qaz";
// Свойство login станет недоступной тк оно приватное
// player.login = "user23912931";

// Класс юзера
// class User {
//     // свойства юзера
//     public email: string;
//     public name: string;

//     // Конструктор
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// Класс юзера с модификаторами public
// class User {
//     constructor(public email: string, public name: string) {}
// }
