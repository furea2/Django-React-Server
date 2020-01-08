import * as PIXI from 'pixi.js';

//import jacketImage from "./jacket.png";
import characterImage from "./yayo.png";

export class PixiApp {
    private static readonly GAME_WIDTH = 1600;
    private static readonly GAME_HEIGHT = 1200;

    private app: PIXI.Application | undefined;

    // init Pixi loader
    constructor() {
        window.onload = (): void => {
            this.startLoadingAssets();
        };
    }

    // Load assets
    private startLoadingAssets(): void {

        // 表示する画像をloaderに登録
        const loader = PIXI.Loader.shared;
        loader.add("character", characterImage);
        loader.on("complete", () => {
            this.onAssetsLoaded();
        });
        loader.load();
    }

    // create stages
    private onAssetsLoaded(): void {
        this.createRenderer();

        const stage = this.app!.stage;

        //console.log(stage);
        const jacket = this.getImage();

        // 女の子をステージに登録
        stage.addChild(jacket);
    }

    // render
    private createRenderer(): void {

        /**
        * STEP.2 描画するためのレンダラーを用意。引数は描画領域の幅、高さ、オプション
        */
        this.app = new PIXI.Application({
            width: PixiApp.GAME_WIDTH,
            height: PixiApp.GAME_HEIGHT,
            antialias: true, // アンチエイリアスをONに
            backgroundColor : 0x000000
            //  transparent:      true,     // 背景を透過にしたい場合はこちらを指定
        });

        // DOMに作成したPIXI.Applicationを登録
        document.body.appendChild(this.app.view);

    }

    ///////////
    // utils //
    ///////////
    private getImage(): PIXI.Sprite {
        // 画像をloaderから読み込む
        const image = new PIXI.Sprite(PIXI.Texture.from("character"));

        return image;
    }

}


