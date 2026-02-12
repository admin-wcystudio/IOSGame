export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {

        this.load.image('logo', 'assets/phaser.png');

        //  The ship sprite is CC0 from https://ansimuz.itch.io - check out his other work!
        this.load.spritesheet('ship', 'assets/spaceship.png', { frameWidth: 176, frameHeight: 96 });
        this.load.video('girlgreet', [
            'assets/video/girl_greet.mov',
            'assets/video/girl_greet.webm'
        ]);
        this.load.video('girlgreet_mp4', 'assets/video/girl_greet.mp4');

        this.load.video('background', 'assets/background.mp4');
    }

    create() {
        this.background = this.add.video(640, 360, 'background');
        this.background.setMute(true);
        this.background.play(true);

        this.girlgreet = this.add.video(340, 360, 'girlgreet');

        if (this.girlgreet.video) {
            this.girlgreet.video.setAttribute('playsinline', 'true');
        }


        this.add.text(340, 100, 'Mov/Web', { font: '64px Courier', fill: '#000000' }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.girlgreet.play(true);
        });

        const ship = this.add.sprite(740, 360, 'ship');

        ship.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 2 }),
            frameRate: 15,
            repeat: -1
        });

        ship.play('fly');

        // this.tweens.add({
        //     targets: logo,
        //     y: 400,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true,
        //     loop: -1
        // });
    }

    update() {
    }

}
