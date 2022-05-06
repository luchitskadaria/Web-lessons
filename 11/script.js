function Arrays(){
//Перше завдання 
    alert('Ввести речення в діалогове вікно. Підрахувати кількість слів')
    let Sentence = prompt('Речення');
    const WordsArray  = Sentence.split(" ");
    alert(WordsArray.length)


//Друге завдання 
    alert('Вводити в діалогове вікно числа до тих пір, поки не буде введений будь-який символ, після цього вивести у вікно всі числа через кому, порахувати їх суму та кількість парних та непарних чисел.')
    let Numbers = prompt();
    let Sum = 0;
    let Even = 0;
    const NumberArray = Numbers.split("");
    let Finish = NumberArray.indexOf(NumberArray.find(Element = isNaN));
    NumberArray.length = Finish;
    for (let i = 0; i< Finish; i++){
        if (NumberArray[i] % 2 == 0){
            Even = Even + 1;
        }
        Sum = Sum + Number(NumberArray[i]);

    }
    let text = NumberArray.toString()
    let Odd = Finish - Even;

    alert("Числа "+ text+"\nСума "+Sum+"\nПарні числа "+Even+"\nНепарні числа "+Odd)


//Трете завдання 
    alert("В програмі зберігається масив з електронними поштами клієнтів. В діалогове вікно вводиться адреса електронної пошти. Вивести у відповідь “така електронна адреса вже зареєстрована!”, якщо вона вже є в цьому масиві, в іншому випадку - додати її до масиву. Продовжити введення до тих пір, поки не буде натиснута кнопка Отмена. Після цього вивести через кому всі адреси електронних пошт  у діалогове вікно.")
    let email = 0;
    const EmailsArray = [];
    email = prompt();
    while (email != null) {
        
        if(EmailsArray.includes(email)) {
            alert("така електронна адреса вже зареєстрована!")
            email = prompt();
                }
        else{
                EmailsArray.push(email);
                email = prompt();
            }
            
    }
    text = EmailsArray.toString();
    alert("Адреси\n"+text)
    }
