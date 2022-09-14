import Home from "../Home";
import { THREE } from "../../utils/index";
//光 环境贴图
export default class Environment {
  constructor() {
    this.home = new Home();
    this.scene = this.home.scene;
    this.resource = this.home.resource;
    this.setLight();
    this.setEnvironmentMap();
    this.setRobot();
  }
  setLight() {
    this.light = new THREE.DirectionalLight(0xffffff, 0.3);
    this.light.position.set(0, 10, 10);
    this.light.intensity = 2;
    this.scene.add(this.light);
    this.light2 = new THREE.DirectionalLight(0xffffff, 0.3);
    this.light2.position.set(0, 10, -10);
    this.scene.add(this.light2);
    this.light3 = new THREE.DirectionalLight(0xffffff, 0.8);
    this.light3.position.set(10, 10, 10);
    this.scene.add(this.light3);
  }
  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.texture = this.resource.items.environmentalMapTexture;
    this.resource.items.environmentalMapTexture.mapping =
      THREE.EquirectangularReflectionMapping;
    this.scene.background = this.environmentMap.texture;
  }
  setRobot() {
    this.robot = {};
    this.robot.scene = this.resource.items.robot.scene;
    this.robot.scene.position.set(0, 1, 0);
    this.scene.add(this.robot.scene);
  }
}
