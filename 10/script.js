function Doc(){
    document.write("Выведите в окно браузера какой-нибудь текст. <br>")
    document.write(123);

    document.write("<br>Выведите в окно браузера какой-нибудь текст, сделав его курсивным.")
    document.write('<br><i>Italic</i>')

    document.write("<br>Выведите текст из переменной в окно браузера так, чтобы он был курсивным.")
    let str = prompt();
    document.write('<br>'+'<i>' +str + '</i>')

    document.write("<br>Выведите в окно браузера столбец чисел от 1 до 5.")
    for (let i = 1; i <= 5; i++) {
        document.write('<br>'+i)
      }
      
    }
