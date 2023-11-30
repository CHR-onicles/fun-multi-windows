const time = new Intl
  .RelativeTimeFormat('en', {
    numeric: 'auto'
  });

time.format(1, 'days');
time.format(-1, 'days');
time.format(22, 'day');

time.format(1, 'month');
time.format(-1, 'month');
console.log(time.format(0, 'month'));
time.format(10, 'month');

console.log(time.format(-1, 'quarter'));
console.log(time.format(-10, 'seconds'));
console.log(time.format(0, 'seconds'));

