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

        // Load 26 transition frames as individual images
        for (let i = 0; i <= 25; i++) {
            this.load.spritesheet('transition' + i,
                'assets/spritesheet/choosepage_boy_galaxytochinese_transition-' + i + '.png',
                {
                    frameWidth: 700,
                    frameHeight: 900
                });
        }
    }

    create() {
        this.background = this.add.video(640, 360, 'background');
        this.background.setMute(true);
        this.background.play(true);

        this.girlgreet = this.add.video(340, 360, 'girlgreet');

        if (this.girlgreet.video) {
            this.girlgreet.video.setAttribute('playsinline', 'true');
        }
        this.girlgreet.play(true);

        this.add.text(340, 100, 'Mov/Web', { font: '64px Courier', fill: '#ffffff' }).setOrigin(0.5);

        this.add.text(940, 100, 'SpriteSheet', { font: '64px Courier', fill: '#ffffff' }).setOrigin(0.5);

        let frames = [];
        for (let i = 0; i <= 25; i++) {
            frames.push({ key: 'transition' + i });
        }
        // Only create the animation if it doesn't already exist (prevents error on scene restart)
        this.anims.create({
            key: 'transitionAnim',
            frames: frames,
            frameRate: 12, // Adjust as needed
            repeat: 0      // 0 = play once, -1 = loop
        });


        // Add sprite and play the animation
        let sprite = this.add.sprite(900, 360, 'transition0');
        sprite.play('transitionAnim');



        // const ship = this.add.sprite(740, 360, 'ship');

        // ship.anims.create({
        //     key: 'fly',
        //     frames: this.anims.generateFrameNumbers('ship', { start: 0, end: 2 }),
        //     frameRate: 15,
        //     repeat: -1
        // });

        // ship.play('fly');
    }

}
