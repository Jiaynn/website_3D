import { THREE } from "../utils/index";
import Camera from "./Camera";

import Renderer from "./Renderer";

import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

import JudgeSource from "./Utils/JudgeSource";
import JudgeScene from "./Utils/JudgeSource";
import Resource from "./Utils/Resource";
import Index from "./Index/Index";
import { IndexSource } from "./source";
let instance = null;
export default class Home {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.render = new Renderer();
    //判断场景
    this.hashHref = window.location.hash;
    this.href = this.hashHref.slice(2, this.hashHref.length);
    if (this.href == "index") {
      this.resource = new Resource(IndexSource);
      this.index = new Index();
    }
    this.update();
    //页面尺寸变化
    this.sizes.on("resize", () => {
      this.resize();
    });
    // Time tick event
    this.time.on("tickTime", () => {
      this.update();
    });
    this.scene.traverse;
  }
  resize() {
    this.camera.resize();
    this.render.resize();
  }
  update() {
    // this.camera.update();
    this.render.update();
  }
}
