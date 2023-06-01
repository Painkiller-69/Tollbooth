class TollBooth {
    private totalCars: number;
    private totalCash: number;

    constructor() {
        this.totalCars = 0;
        this.totalCash = 0;
    }

    payingCar(): void {
        this.totalCars++;
        this.totalCash += 50;
    }

    nopayCar(): void {
        this.totalCars++;
    }

    display(): void {
        console.log("Total cars:", this.totalCars);
        console.log("Total cash collected:", this.totalCash);
    }
}

function sample(...args: Array<string>): void {
    const tollbooth = new TollBooth();
    for (const arg of args) {
        if (arg === 'p') {
            tollbooth.payingCar();
        } else if (arg === 'n') {
            tollbooth.nopayCar();
        }
    }
    tollbooth.display();
}

sample('p', 'p', 'n', 'p', 'n');
sample('p', 'p', 'n', 'p', 'p', 'n', 'p');
sample('p', 'p', 'n', 'p', 'n', 'p', 'p', 'p', 'n');
