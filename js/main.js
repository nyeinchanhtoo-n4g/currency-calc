let currencyOneEl = document.getElementById(`c_one`);
let currencyTwoEl = document.getElementById(`c_two`);
let w_fromEl = document.getElementById(`w_from`);
let w_toEl = document.getElementById(`w_to`);
let amountEl = document.getElementById(`amount`);
let changeBtnEl = document.getElementById(`changeBtn`);

amountEl.value = ``;

function convert(){
    let cur_one = currencyOneEl.value;
    let cur_two = currencyTwoEl.value;
    let cur_amount = amountEl.value;
    fetch(`https://v6.exchangerate-api.com/v6/c6c8a1e5252d44324412b005/latest/${cur_one}`)
        .then((resp) => resp.json())
        .then(data => {
            let rate = data.conversion_rates[cur_two];
            let result_from = `${cur_one} -> ${cur_amount}${cur_one}`;
            let result_to = `${cur_two} -> ${(rate * cur_amount).toFixed(2)}${cur_two} `;
             
            w_fromEl.innerHTML = result_from;
            w_toEl.innerHTML = result_to;
        })
    }
convert();

currencyOneEl.addEventListener(`change`, convert);
currencyTwoEl.addEventListener(`change`, convert);
amountEl.addEventListener(`input`, convert);

changeBtnEl.addEventListener(`click`, () => {
    let btn = currencyOneEl.value;
    currencyOneEl.value=currencyTwoEl.value;
    currencyTwoEl.value = btn;
    convert();
})