import Store from 'electron-store';

class DataStore extends Store {
  constructor (settings) {
    super(settings)

    // initialize with todos or empty array
    this.stocks = this.get('stocks') || []
  }

  saveStocks () {
    // save todos to JSON file
    this.set('stocks', this.stocks)

    // returning 'this' allows method chaining
    return this
  }

  getStocks () {
    // set object's todos to todos in JSON file
    this.stocks = this.get('stocks') || []

    return this
  }

  addStock (todo) {
    // merge the existing todos with the new todo
    this.stocks = [ ...this.stocks, stock ]

    return this.saveStocks()
  }

  deleteStock (todo) {
    // filter out the target todo
    this.stocks = this.stocks.filter(t => t !== stock)

    return this.saveStocks()
  }
}

export default DataStore