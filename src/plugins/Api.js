export default class Api {
  constructor(http) {
    this.http = http
  }

  message = 'Não foi possível conectar-se à API.'

  request(body) {
    return this.http.post(this.URL, body).then(
      res => res.json(),
      err => {
        console.error(err)
        throw new Error(this.message)
      }
    )
  }
}
