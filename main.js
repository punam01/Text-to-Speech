//Init Speech Synthesis API
const synth=window.speechSynthesis;

//Dom Elements
const Form=document.querySelector('form');
const textInput=document.querySelector('#text-input');
const voiceSelect=document.querySelector('#voice-select');
const rate=document.querySelector('#rate');
const rateValue=document.querySelector('#rate-value');
const pitch=document.querySelector('#pitch');
const pitchValue=document.querySelector('#pitch-value');

//Init voices array
let voices=[];

function getVoices(){
    voices=synth.getVoices();
    voices.forEach(voice => {
        //create option element
        const option=document.createElement('option');
        //fill option with voice and language
        option.textContent=voice.name+'('+voice.lang+')'
        //set option attributes
        option.setAttribute('data-lang',voice.lang);
        option.setAttribute('data-name',voice.name);
        //append this option to voice select list
        voiceSelect.appendChild(option);
    });
};

if(synth.onvoiceschanged!==undefined){
    synth.onvoiceschanged=getVoices;
}