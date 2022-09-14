import Home from "../Home";
import { THREE } from "../../utils";
export default class Distoryed {
  constructor() {
    this.home = new Home();
    this.scene = this.home.scene;
    this.camera = this.home.camera.camera;
    this.controls = this.home.camera.control;
    this.renderer = this.home.render.renderer;
    this.cleanTexture(this.scene);
    this.clearScene(this.scene);
    this.remove();
  }
  cleanTexture(obj) {
    obj.background.dispose();
  }
  clearScene(obj) {
    obj.children.forEach((item) => {
      if (item.children.length) {
        this.clearScene(item);
      } else {
        this.clearCache(item);
        item.clear();
      }
    });
    obj.clear();
  }
  clearCache(item) {
    if (item.type == "Mesh" || item.type == "Reflector") {
      item.geometry.dispose();
      item.material.dispose();
    }
  }
  remove() {
    this.renderer.renderLists.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.renderer.domElement = null;
    this.renderer.content = null;
    this.scene.clear();
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.renderer.domElement = null;
    this.renderer = null;
    this.sceneDomElement = null;
    THREE.Cache.clear();
  }
}
