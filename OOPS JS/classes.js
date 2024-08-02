class computer {
  constructor(name) {
    this.name = name
  }

  log() {
    console.log(this.name)
  }
}


class windiow extends computer {
  constructor(name, version) {
    super()

    // this.log = () => {
    //   console.log(this.version)
    // }
  }
  // log() {
  //   console.log(this.version)
  // }
}
let comp = new computer("mac");
let windows = new windiow("wind", "1997")
windows.log()