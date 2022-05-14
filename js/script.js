//dohody
const zarplata = document.getElementById('d-1');
const stipendia = document.getElementById('d-2');
const dopdohod1 = document.getElementById('d-3');
const dopdohod2 = document.getElementById('d-4');

//rashody
const kvartira = document.getElementById('r-1');
const credit = document.getElementById('r-2');
const doprashod1 = document.getElementById('r-3');
const doprashod2 = document.getElementById('r-4');

//total titles
const totalMounthTitle = document.getElementById('title-mounth');
const totalDayTitle = document.getElementById('title-day');
const totalYearTitle = document.getElementById('title-year');

let totalMounth, totalDay, totalYear;

//money box
const moneyBoxRange = document.getElementById('money-box-range');
const copimZnacheniye = document.getElementById('title-copim');
const tratimZnacheniye = document.getElementById('title-tratim');

let copim = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.calculator__input');
for (input of inputs) {
	input.addEventListener('input', () => {
		vsegoMoney();
		calculationPrecents();
	});
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const vsegoMoney = () => {
	const totalPerMounth = strToNum(zarplata) + strToNum(stipendia) + strToNum(dopdohod1) + strToNum(dopdohod2);
	const totalRashody = strToNum(kvartira) + strToNum(credit) + strToNum(doprashod1) + strToNum(doprashod2);
	totalMounth = (totalPerMounth - totalRashody);
	totalMounthTitle.value = totalMounth;
}

moneyBoxRange.addEventListener('input', e => {
	const totalPercentsElement = document.getElementById('total-percents');
	totalPrecents = e.target.value;
	totalPercentsElement.innerHTML = totalPrecents;
	calculationPrecents();
});

const calculationPrecents = () => {
	copim = ((totalMounth * totalPrecents) / 100).toFixed(2);
	copimZnacheniye.value = copim;

	tratimZnacheniye.value = (totalMounth - copim).toFixed(2);

	totalDay = (tratimZnacheniye.value / 30).toFixed(2);
	totalDayTitle.value = totalDay;

	totalYear = (copim * 12).toFixed(2);
	totalYearTitle.value = totalYear;
}