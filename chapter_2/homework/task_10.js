let lift = {
    currentFloor: 1,
    minFloor: 1,
    maxFloor: 16,

    upOneFloor() {
        if(this.currentFloor < this.maxFloor){
            this.currentFloor++
            this.printFloor()
        }else {
            console.log('Вы ввели не правельный этаж')
            return
        }

    },
    downOneFloor(){
        if(this.currentFloor > this.minFloor){
            this.currentFloor--
            this.printFloor()
        }else {
            console.log('Вы ввели не правельный этаж')
            return            
        }
    },
    printFloor(){
        console.log('Вы на ' + this.currentFloor + ' этаже')
    },
    toFloor(countOfFloor){
        while(this.currentFloor != countOfFloor){
            if(countOfFloor > this.currentFloor && countOfFloor <= this.maxFloor){
                this.upOneFloor()
            }else if (countOfFloor < this.currentFloor && countOfFloor >= this.minFloor){
                this.downOneFloor()
            }else {
                console.log('Вы ввели не правельный этаж')
                return
            }
          
        }
    }
}
    lift.upOneFloor();
    lift.downOneFloor();
    lift.toFloor(9);
    lift.toFloor(5)
    lift.toFloor(19);
    //     lift.downOneFloor();
    //     lift.downOneFloor();
    // lift.toFloor(15);
    // lift.upOneFloor();
    // lift.upOneFloor();





