
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
    {
      id: 3,
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke ',
      price: 28,
      coverImage: 'https://eloquentjavascript.net/img/cover.jpg'},
    {
      id: 4,
      title: `You Don't Know JS: Scope & Closures`,
      author: 'Kyle Simpson',
      price: 12,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/411VXVm79JL._SX331_BO1,204,203,200_.jpg'},
    {
      id: 5,
      title: `You don't know JS: Up & Going`,
      author: 'Kyle Simpson',
      price: 50,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41L18FvA5rL._SX331_BO1,204,203,200_.jpg'},
    {
      id: 6,
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke ',
      price: 28,
      coverImage: 'https://eloquentjavascript.net/img/cover.jpg'},
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}