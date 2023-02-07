const debounce = (fn, seconds) => {
  let timeOutId;
  return () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn.apply(this);
      timeOutId = null;
    }, seconds * 1000)
  }
}

const throttle = (fn, seconds) => {
  let timeOutId;
  return () => {
    if (timeOutId) {
      return;
    }
    timeOutId = setTimeout(() => {
      fn.apply(this);
      timeOutId = null;
    }, seconds * 1000)
  }
}


const fn1 = debounce(() => console.log('in three seconds'), 3);
fn1();
fn1();
fn1();
fn1();

const fn2 = throttle(() => console.log('in three seconds'), 3);
fn2();
fn2();
fn2();
fn2();