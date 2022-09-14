import { THREE } from "../../utils";
export default class Loading {
  constructor() {
    //设置加载器
    this.manager = new THREE.LoadingManager();

    this.manager.onStart = function (url, itemsLoaded, itemsTotal) {
      console.log(
        "Started loading file: " +
          url +
          ".\nLoaded " +
          itemsLoaded +
          " of " +
          itemsTotal +
          " files."
      );
    };
    this.manager.onLoad = function () {
      console.log("Loading complete!");
    };
    this.manager.onProgress = function (url, itemsLoaded, itemsTotal) {
      this.loadingNum = (itemsLoaded / itemsTotal) * 100 + "%";
      console.log(this.loadingNum);
    };
  }
}
