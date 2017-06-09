module.exports = {
  /*Username*/
  isAscii:function(str){
      return /^[\x00-\x7F]*$/.test(str);
  },
  checkSpecialSymbols:function (str) {
        return /^[a-z0-9\-_\.]+$/i.test(str);
  },
  checkMinLength:function(str, min) {
        return ((str || '').length >= (isFinite(parseInt(min)) ? min : 3));
  },
  checkMaxLength:function(str, max) {
      return ((str || '').length <= (isFinite(parseInt(max)) ? max : 50));
  },
  generateError:function(msg) {
        return {
            status: 'error',
            message: msg
        }
    },
    /*Password*/
  passMinLength:function(str, min){
    return ((str || '').length >= (isFinite(parseInt(min)) ? min : 6));
  },
  passMaxLength:function(str, max){
    return ((str || '').length <= (isFinite(parseInt(max)) ? max : 25));
  },
  /*Email*/
  emailMinLength:function(str, min) {
        return ((str || '').length >= (isFinite(parseInt(min)) ? min : 10));
  },
  emailMaxLength:function(str, max) {
      return ((str || '').length <= (isFinite(parseInt(max)) ? max : 255));
  },
  validateEmail:function(str) {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str);
},
/*Age*/
agetype:function(num){
  return (isFinite(parseInt(num)));
}
/*Gender*/
/*genderCheck:function(num){
  isFinite(parseInt(num));
  if(num==1) return 'male'
  if(num==0) return 'female'
}*/


}
