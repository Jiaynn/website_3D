import EventEmitter from "./EventEmitter";
import { THREE, RGBELoader, GLTFLoader, DRACOLoader } from "../../utils/index";

import Home from "../Home";

export default class Resource extends EventEmitter {
  constructor(sources) {
    super();
    this.home = new Home();
    this.sources = sources;
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    //设置loaders
    this.setLoaders();
    this.startLoading();
  }
  setLoaders() {
    this.loaders = {};

    this.loaders.hdrLoader = new RGBELoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.gltfLoader = new GLTFLoader();
  }
  startLoading() {
    for (let source of this.sources) {
      if (source.type === "gltfModel") {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("./draco/gltf/");
        dracoLoader.setDecoderConfig({ type: "js" });
        this.loaders.gltfLoader.setDRACOLoader(dracoLoader);
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "hdr") {
        this.loaders.hdrLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }
}
