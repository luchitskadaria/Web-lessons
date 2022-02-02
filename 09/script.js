function Exersice1(){
    let meters = prompt('Площа в метрах квадратних');
    let hectares = meters / 10000; 
    let acres = meters / 4047;
    let kilometers = meters / 1000000;
    alert(`Площа в акрах - ${acres} \nПлоща в гектарах - ${hectares}\nПлоща в кілометрах квадратних - ${kilometers}`);
    console.log(`Площа в акрах - ${acres} \nПлоща в гектарах - ${hectares}\nПлоща в кілометрах квадратних - ${kilometers}`);
}
function Exersice2(){
let EnergyUsed = prompt('Введіть використану елестроенергію');
if(EnergyUsed <= 100){
    result = EnergyUsed * 0.90; 
 }else{
     result = ((EnergyUsed % 100) * 1.68) + ((EnergyUsed - (EnergyUsed % 100)) * 0,90);
 }
alert(result)
console.log(`Вартість електроенергії ${result}`);

}
