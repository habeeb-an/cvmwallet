import EventEmitter from 'eventemitter3';
export class CVMwalletEvent {
  protected static eventListener = new EventEmitter();
  public static txHashEmit = (txHash: string, infoTx: any) =>
    CVMwalletEvent.eventListener.emit(txHash, infoTx);
  public static txHashListener = (txHash: string, callback: any) =>
    CVMwalletEvent.eventListener.addListener(txHash, callback);
}
