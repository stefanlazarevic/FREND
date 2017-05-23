class Validator{
  constructor(){}

  isNull(v, f = ""){
    if(v === null){
      console.error(`Validator: ${f} value is null`)
      return true
    }
    return false
  }

  isDigit(n){
    if(!this.isNull(n)){
      return /^\d+$/.test(n);
    }
  }

  isCreditCard(cc){
    if(!this.isNull(cc, "Credit Card")){
      const visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
            mastercard = /^(?:5[1-5][0-9]{14})$/,
            americanExpress = /^3[47][0-9]{13}$/,
            discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb = /^(?:2131|1800|35\d{3})\d{11}$/,
            dinnersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/

      if(visa.test(cc)) return { 'cardName' : "Visa", "status": true }
      else if(mastercard.test(cc)) return { 'cardName' : "Mastercard", "status": true }
      else if(americanExpress.test(cc)) return { 'cardName' : "American Express", "status": true }
      else if(discover.test(cc)) return { 'cardName' : "Discover", "status": true }
      else if(jcb.test(cc)) return { 'cardName' : "JCB", "status": true }
      else if(dinnersClub.test(cc)) return { 'cardName' : "Dinners Club", "status": true }
      else {
        return { 'cardName' : null, "status": false }
      }
    }
  }

  passwordMatch(p1, p2){
    return p1 === p2
  }

  isEmail(e){
    if(!this.isNull(e, "Email")){
      const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return email.test(e);
    }
  }

  // Useful to check cities and countries
  isCityOrCountry(s){
    sentence = /\b((?!=|\d|\,|\.).)+(.)\b/
  }

  isBetween(n, min = 0, max = 0){
    if(!this.isNull(n) && this.isDigit(n)) return n < max && n > min
  }
}

export const validator = new Validator()
