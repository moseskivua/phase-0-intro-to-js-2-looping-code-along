// Code your solutions in this file
function writeCards(names, event) {
    const cardContent=[];
    for (let i = 0; i<names.length; i++) {
        cardContent.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`,);
    }
    return cardContent
}
function countDown() {
    let countdown = 10 ;
    while (countdown >= 0) {
    console.log(countdown--);
}
}