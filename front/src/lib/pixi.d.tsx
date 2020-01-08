import * as PIXI from 'pixi.js';

module StageManager {

    export class Scene extends PIXI.Stage {
        private paused: bool = false;
        private updateCB = function () { };

        constructor(background:number) {
            super(background);
        }
        public onUpdate(updateCB: () => void ) {
            this.updateCB = updateCB;
        }

        public update() {
            this.updateCB();
        }
        public pause() {
            this.paused = true;
        }
        public resume() {
            this.paused = false;
        }
        public isPaused() {
            return this.paused;
        }

    }

    export class ScenesManager {
        private static scenes: any = {}; // should be hashmap but a JS object is fine too :)
        public static currentScene: Scene;
        public static renderer: PIXI.IRenderer;

        public static create(width: number, height: number) {
            if (ScenesManager.renderer) return this;

            ScenesManager.renderer = PIXI.autoDetectRenderer(width, height);
            document.body.appendChild(ScenesManager.renderer.view);
            requestAnimFrame(ScenesManager.loop);
            return this;
        }
        private static loop() {
            requestAnimFrame(function () { ScenesManager.loop() });

            if (!currentScene || currentScene.isPaused()) return;
            currentScene.update();
            ScenesManager.renderer.render(currentScene);
        }

        public static createScene(id: string): Scene {
            if (ScenesManager.scenes[id]) return undefined;

            var scene = new Scene();
            ScenesManager.scenes[id] = scene;

            return scene;
        }

        public static goToScene(id: string): bool {

            if (ScenesManager.scenes[id]) {
                if (ScenesManager.currentScene) ScenesManager.currentScene.pause();
                ScenesManager.currentScene = ScenesManager.scenes[id];
                ScenesManager.currentScene.resume();
                return true;
            }
            return false;
        }

    }

}