Определите метод, hello который returns сообщает "Привет, имя!" заданному name или говорит "Привет, Мир!" если имя не указано (или передается как пустая строка).
Предполагая, что это name является String, и он проверяет наличие опечаток пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).

Примеры:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"


function hello(name) {
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}
