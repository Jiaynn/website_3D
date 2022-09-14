import Home from "../Home";
import Environment from "./Environment";
import MirrorReflect from "./MirrorReflect";
import Video from "./Video";
export default class Index {
  constructor() {
    this.home = new Home();
    this.scene = this.home.scene;
    this.resource = this.home.resource;
    this.resource.on("ready", () => {
      this.environment = new Environment();
      this.video = new Video();
      this.mirrorReflect = new MirrorReflect();
    });
  }
}
