export class Log {
  static success(...msg: any) {
    console.log(`%c ${msg}`, `color:green`);
  }
  static danger(...msg: any) {
    console.log(`%c ${msg}`, `color:red`);
  }
  static info(...msg: any) {
    console.log(`%c ${msg}`, `color:black; background:yellow`);
  }
}
