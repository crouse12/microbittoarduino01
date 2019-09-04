//% weight=0 color=#EC7505 icon="\uf0ad" block="microbitarduino"
namespace microbitarduino {
      export enum analogpin {
        A0 = 0,
        A1 = 1,
        A2 = 2,
        A3 = 3,
        A4 = 4,
        A5 = 5
     }
     
      export enum digitalpin {
        D0 = 0,
        D1 = 1,
        D2 = 2,
        D3 = 3,
        D4 = 4,
        D5 = 5,
        D6 = 6,
        D7 = 7,
        D8 = 8,
        D9 = 9,
        D10 = 10,
        D11 = 11,
        D12 = 12,
        D13 = 13
     }
      
      export enum digitalpin1 {
        D3 = 3,
        D5 = 5,
        D6 = 6,
        D9 = 9,
        D10 = 10,
        D11 = 11
     }
      
      export enum type {
        INPUT = 2,
        OUTPUT = 1
     }
     export enum value {
        HIGH = 1,
        LOW = 0
     }
      
          //% block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=101
    //% blockExternalInputs = 1
    export function setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(100)
    }

    //% blockId=setpinmode1 block="set arduino digital pin %pin | for %XY"
    //% weight=101
    export function setpinmode1(pin: digitalpin, XY: type):void {
       serial.writeLine("pinMode="+pin.toString()+","+XY.toString()+"\\n")    
    }
     
     
    //% blockId=setdigital1 block="set arduino digital pin  %pin | value to %XY"
    //% weight=101
    export function setdigital1(pin: digitalpin, XY: value):void {
        serial.writeLine("digitalWrite="+pin.toString()+","+XY.toString()+"\\n")    
    }
     
    //% blockId=setdigital2 block="set arduino digital pin  %pin | PWM value to %XY"
    //% weight=101
    export function setdigital2(pin: digitalpin1, XY: number):void {
        serial.writeLine("analogWrite="+pin.toString()+","+XY.toString()+"\\n")    
    }
 
    //% blockId=setdigital3 block="read arduino digital pin  %pin value"
    //% weight=101
    export function setdigital3(pin: digitalpin):string {
        serial.writeLine("digitalRead="+pin.toString()+"\\n")
        basic.pause(10)
        let a=serial.readString()
        return a;
    }
    //% blockId=setdigital4 block="read arduino analog pin  %pin value"
    //% weight=101 
    export function setdigital4(pin: analogpin):string {
        serial.writeLine("analogRead="+pin.toString()+"\\n")
        basic.pause(10)
        let a=serial.readString()
        return a
    }   
}
