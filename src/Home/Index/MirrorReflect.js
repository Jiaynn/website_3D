import { THREE, Reflector } from "../../utils/index";
import Home from "../Home";

export default class MirrorReflect {
  constructor() {
    this.home = new Home();
    this.scene = this.home.scene;
    this.setGeometry();
    this.setReflector();
  }
  setGeometry() {
    this.reflectorGeometry = new THREE.PlaneGeometry(100, 100);
  }
  setReflector() {
    this.reflectorPlane = new Reflector(this.reflectorGeometry, {
      textureWidth: window.innerWidth,
      textureHeight: window.innerHeight,
      color: 0x332222,
    });

    this.reflectorPlane.rotation.x = -Math.PI / 2;
    this.scene.add(this.reflectorPlane);
  }
}
