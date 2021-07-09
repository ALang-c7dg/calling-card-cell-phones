module.exports =
class CallingCard {
    constructor(centsPerMinute) {
        this._centsPerMinute = centsPerMinute;
        this._minutesOnCard = 0;
    }

    addDollars(dollars) {
        this._minutesOnCard += Math.trunc((dollars * 100) / this._centsPerMinute);
    }

    getRemainingMinutes() {
        return this._minutesOnCard;
    }

    useMinutes(minutesUsed) {
        if (minutesUsed > this._minutesOnCard) {
            this._minutesOnCard = 0;
        } else {
            this._minutesOnCard -= minutesUsed; 
        }        
    }
}
