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

        this.load.video('background', 'assets/background.mp4');
    }

    create() {
        this.background = this.add.video(640, 360, 'background');
        this.background.setMute(true);
        this.background.play(true);

        this.girlgreet = this.add.video(640, 360, 'girlgreet');
        this.girlgreet.setMute(true);
        this.girlgreet.play(true);

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
