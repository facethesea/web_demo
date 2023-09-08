let a = {
  x: 1,
  t: 3,
  sum() {
    this.y = this.x + this.t;
  },
};

a.sum();
console.log(a.y);
