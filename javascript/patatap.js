var sounds = ["assets/sounds/bubbles.mp3",
"assets/sounds/clay.mp3",
"assets/sounds/confetti.mp3",
"assets/sounds/corona.mp3",
"assets/sounds/dotted-spiral.mp3",
"assets/sounds/flash-1.mp3",
"assets/sounds/flash-2.mp3",
"assets/sounds/flash-3.mp3",
"assets/sounds/glimmer.mp3",
"assets/sounds/moon.mp3",
"assets/sounds/pinwheel.mp3",
"assets/sounds/piston-1.mp3",
"assets/sounds/piston-2.mp3",
"assets/sounds/piston-3.mp3",
"assets/sounds/prism-1.mp3",
"assets/sounds/prism-2.mp3",
"assets/sounds/prism-3.mp3",
"assets/sounds/splits.mp3",
"assets/sounds/squiggle.mp3",
"assets/sounds/strike.mp3",
"assets/sounds/suspension.mp3",
"assets/sounds/timer.mp3",
"assets/sounds/ufo.mp3",
"assets/sounds/veil.mp3",
"assets/sounds/wipe.mp3",
"assets/sounds/zig-zag.mp3",];

document.addEventListener("keydown", function(event) {
    if ((event.which >= 65 && event.which <= 90)){

        new Howl ({
            src: sounds[event.which-65]
        }).play();
    }
})