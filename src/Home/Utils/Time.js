import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();
    this.start = Date.now();
    this.current = this.start;
    this.isAnnimate = false;
    //到现在的经历的总时间
    this.elapsed = 0;
    //每一帧的间隔时间
    this.delta = 16;
    this.tickTime();
  }
  tickTime() {
    const curTime = Date.now();
    this.delta = curTime - this.current;
    this.elapsed = this.current - this.start;
    this.trigger("tickTime");
    this.frameid = window.requestAnimationFrame(() => {
      this.tickTime();
    });
  }
}
