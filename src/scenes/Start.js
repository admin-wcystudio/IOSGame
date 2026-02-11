export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {

        this.load.image('logo', 'assets/phaser.png');

        //  The ship sprite is CC0 from https://ansimuz.itch.io - check out his other work!
        this.load.spritesheet('ship', 'assets/spaceship.png', { frameWidth: 176, frameHeight: 96 });

        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        // Choose the best file based on the browser
        const videoSrc = isSafari ? 'assets/video/girl_greet.mov' : 'assets/video/girl_greet.webm';

        this.load.video('girlgreet', videoSrc);
        this.load.spritesheet('ship', 'assets/ship.png', { frameWidth: 64, frameHeight: 64 });

        //this.load.spritesheet('girl_greet', 'assets/girl_greet.png', { frameWidth: 64, frameHeight: 64 });

        this.load.video('background', 'assets/background.mp4');
    }

    create() {
        this.background = this.add.video(640, 360, 'background');
        this.background.setMute(true);
        this.background.play(true);

        this.girlgreet = this.add.video(360, 360, 'girlgreet');

        const rawVideo = this.girlgreet.video;
        if (rawVideo) {
            rawVideo.setAttribute('playsinline', 'true');
            rawVideo.setAttribute('webkit-playsinline', 'true');
            rawVideo.muted = true;
        }
        // Trigger play on user interaction
        this.input.once('pointerdown', () => {
            console.log('pointerdown');
            this.girlgreet.play(true);
        });

        this.add.text(360, 50, 'Mov/Webm',
            { font: '62px Arial', fill: '#000000' }).setOrigin(0.5);

        //const logo = this.add.image(640, 200, 'logo');

        const ship = this.add.sprite(140, 360, 'ship');

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
