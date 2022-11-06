var sid = 'AC94205b041f9f29fec7266b2dd816f7f7'
var auth_token = '6ff138b865129ed415b04f15b8f4ef16'
var twilio = require('twilio')(sid,auth_token)

var  dt=document.getElementById("clouds");
//write((weatherReport(data)).toFixed());

twilio.messages.create({
    from:"+18654242846",
    to:'+919717267311',
    body:"Hi " + {dt},
})
.then((res)=>console.log('message has sent!'))
.catch((err) => {
    console.log(err);
});