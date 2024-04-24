// Попередні ДЗ
//makeProfileTimer
function makeProfileTimer() {
    const startTime = performance.now();
    return function() {
        return performance.now() - startTime;
    };
}
const timer = makeProfileTimer();
alert('Вимірюємо час роботи цього alert');
alert(timer()); 

const timer2 = makeProfileTimer();
prompt('');
alert(`Час роботи двох alert та одного prompt ${timer()}`);
alert(`Час роботи prompt та попереднього alert ${timer2()}`);

//makeSaver
//myBind
//checkResult
