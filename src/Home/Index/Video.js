import { THREE } from "../../utils/index";
import Home from "../Home";
export default class Video {
  constructor() {
    this.home = new Home();
    this.scene = this.home.scene;
    this.initVideo();
    this.setGeometry();
    this.setTextures();
    this.setMaterial();
    this.setMesh();
  }
  initVideo() {
    this.video = document.createElement("video");
    this.video.src = "zp2.mp4";
    this.video.loop = true;
    this.video.muted = true;
    this.video.play();
  }
  setGeometry() {
    this.videoGeoPlane = new THREE.PlaneBufferGeometry(8, 4.5);
  }
  setTextures() {
    this.videTexture = new THREE.VideoTexture(this.video);
  }
  setMaterial() {
    this.videoMaterial = new THREE.MeshBasicMaterial({
      map: this.videTexture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaMap: this.videTexture,
    });
  }
  setMesh() {
    this.videoMesh = new THREE.Mesh(this.videoGeoPlane, this.videoMaterial);

    this.videoMesh.position.set(0, 0.2, 0);
    this.videoMesh.rotation.set(-Math.PI / 2, 0, 0);
    this.scene.add(this.videoMesh);
  }
}
