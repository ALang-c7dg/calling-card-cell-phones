module.exports =
class CellPhone {
    constructor(card){
        this._card = card;
        this._isTalking = false;
        this._callHistory = [];
        this._currentCall = {}
    }

    isTalking() {
        return this._isTalking;
    }

    call(numberCalled) {
        this._isTalking = true;
        this._currentCall.number = numberCalled;
        this._currentCall.duration = 0;
    }

    tick() {
        this._card.useMinutes(1);
        this._currentCall.duration += 1;
        if (this._card.getRemainingMinutes() === 0) {
            this._currentCall.isCut = true;
            this.endCall();
        }
    }

    endCall() {
        this._isTalking = false;
        this._callHistory.push(this._currentCall);
        this._currentCall = {};
    }

    getHistory(){
 
       return this._callHistory.map(function(call){
          
          let minutesDisplay = 'minutes'; 
          if (call.duration === 1) {
             minutesDisplay = 'minute';
          }

          let message = '';
          if (!call.isCut) {
             message = `${call.number} (${call.duration} ${minutesDisplay})`;
          } else {
            message = `${call.number} (cut off at ${call.duration} ${minutesDisplay})`;
          }
          return message; 

        }).join(', ');
    
    }
}
