// Функция для установления значения статического свойство
function setName() {
    return "COD";
}

// Класс игрока с модификаторами private, public, protected
// public - значение по умолчанию
// private - для использования внутри конкретного класса
// #(private) - тоже приватное свойство, но с помощью спец символа
// protected - приватное свойство распространяемое на потомков
class Player {
    // Статическое свойство (static) для вызова в дальнейшем
    // static game: string = "COD";
    // Приватной статическое свойство (static) для вызова внутри класса
    private static game: string = "COD";

    // свойства игрока
    // #login: string;
    private _password: string | undefined;
    public server: string | undefined;
    protected consent: boolean | undefined;

    // Статичный блок
    static {
        Player.game = setName();
    }

    // Приватный конструктор (наследование будет невозможно)
    // private constructor() {}

    // protected constructor() {}

    // Конструктор
    // constructor(game: string) {
    //     // Обращаемся к свойству game
    //     Player.game = game;
    // }

    // getter
    // get password() {
    //     return this._password;
    // }

    // setter
    set password(newPass: string) {
        // Validation
        this._password = newPass;
    }

    // Статический метод для вызова свойства game
    static getGameName() {
        // Вызов свойства
        return Player.game;
    }
}

new Player();
new Player();
new Player();
console.log(Player.getGameName());

// Самый известный статический метод Math.random()
// Math.random();
// new Math();

// Вызов свойства game
// Player.game;

// Наследования Player (extends)
// class CompetitivePlayer extends Player {
//     rank: number;

//     private isConsented() {
//         this.consent ? "yes" : "no";
//     }
// }

// Экземпляр нового игрока
// const player = new Player();
// // Изменяем значение пароля с помощью setterа
// player._password = "12345qaz";
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
