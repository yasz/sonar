basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) < 50) {
        basic.pause(50)
        if (sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        ) < 50) {
            basic.showIcon(IconNames.Heart)
        }
    } else {
        basic.clearScreen()
    }
    basic.pause(200)
})
