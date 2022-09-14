import Home from "./Home";
import { THREE, OrbitControls } from "../utils/index";
export default class Camera {
  constructor() {
    this.home = new Home();
    this.sizes = this.home.sizes;
    this.scene = this.home.scene;
    this.canvas = this.home.canvas;
    this.setCamera();
    this.setControls();
  }
  setCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
      1000
    );
    this.camera.position.set(0, 1.5, 4);
    this.scene.add(this.camera);
  }
  setControls() {
    this.control = new OrbitControls(this.camera, this.canvas);
    //设置阻尼效果 如果设置了这个效果，要在动画循环里调用.update()
  }
  resize() {
    //摄像机视锥体的长宽比
    this.camera.aspect = this.sizes.width / this.sizes.height;
    //在大多数属性发生改变之后，调用.updateProjectionMatrix来使得这些改变生效
    this.camera.updateProjectionMatrix();
  }
}
