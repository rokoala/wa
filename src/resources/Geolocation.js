export default class Geolocation {
  constructor() {
    this.options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  }
  static getLocation() {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          res(pos);
        },
        err => {
          rej(err);
        },
        this.options
      );
    });
  }
}
