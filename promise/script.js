let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  // "певец"

  setTimeout(() => resolve("done"), 1000);
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  result => console.log(result),
  error => console.log(error)
);

