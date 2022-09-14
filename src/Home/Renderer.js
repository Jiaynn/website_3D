import Home from "./Home";
import { THREE } from "../utils/index";
export default class Renderer {
  constructor() {
    this.home = new Home();
    this.canvas = this.home.canvas;
    this.sizes = this.home.sizes;
    this.scene = this.home.scene;
    this.camera = this.home.camera;
    this.setRender();
    this.update();
  }
  setRender() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    //物理上的正确光照
    this.renderer.physicallyCorrectLights = true;
    //渲染器的输出编码
    this.renderer.outputEncoding = THREE.RGBADepthPacking;
    //色调映射
    this.renderer.toneMapping = THREE.CineonToneMapping;
    //色调映射的曝光级别
    this.renderer.toneMappingExposure = 1.7;
    //允许在场景中使用阴影贴图
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    //设置颜色及其透明度
    this.renderer.setClearColor("#211d20");
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }
  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }
  update() {
    this.renderer.render(this.scene, this.camera.camera);
  }
}
