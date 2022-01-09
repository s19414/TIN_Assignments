//b)Write a JS function that will add a paragraph of text
//to the page after 5 seconds from opening the page
var ragnarTheRed = `Oh, there once was a hero named Ragnar the Red
Who came riding to Whiterun from old Rorikstead
And the braggart did swagger and brandish his blade
As he told of bold battles and gold he had made
But then he went quiet, did Ragnar the Red
When he met the shieldmaiden, Matilda, who said:
Oh you talk, and you lie, and you drink all our mead
Now I think it's high time that you lie down and bleed
And so then came clashing and slashing of steel
As the brave lass Matilda charged in full of zeal
And the braggart named Ragnar was boastful no more
When his ugly red head rolled around on the floor`;
function startTimer() {
    console.log("Timer started");
    window.setTimeout(printParagraph, 5000);
}

function printParagraph() {
    document.write(ragnarTheRed);
}