import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Layer, Network } from 'synaptic';

import log from './log';

/**
 * Neural network for predicting the XOR operator.
 */

 @Component({
  selector: 'masinraudtee-component',
  templateUrl: './masinraudtee.component.html',
  styleUrls: ['./masinraudtee.component.scss']
})

 export class MasinraudteeComponent implements OnInit {
// Create layers


voti1 = 'tasuvMadal';
sisend1: string;
sisend1a: number;
getsisendEsimene() {
  this.sisend1 = localStorage.getItem(this.voti1); 
  this.sisend1a=Number(this.sisend1);
  return this.sisend1a;
}

voti2 = 'tasuvKeskmine';
sisend2: string;
sisend2a: number;
getsisendTeine() {
  this.sisend2 = localStorage.getItem(this.voti2);
  this.sisend2a=Number(this.sisend2);
  return this.sisend2a;
}

voti3 = 'tasuvKorge';
sisend3: string;
sisend3a: number;
getsisendKolmas() {
  this.sisend3 = localStorage.getItem(this.voti3);
  this.sisend3a=Number(this.sisend3);
  return this.sisend3a;
}


trainingData: any;
xorNetwork: any;
learningRate: any;

constructor () {

const input = new Layer(3);
const hidden = new Layer(5);
const output = new Layer(1);

// Connect layers
input.project(hidden);
hidden.project(output);

// Create network
this.xorNetwork = new Network({
  input,
  hidden: [hidden],
  output,
});

// Train the network
this.trainingData = [
  [[1, 1, 1], [1]],
  [[0.7, 0.8, 0.9], [1]],
  [[0.8, 0.6, 0.8], [1]],
  [[0.2, 0.1, 0.3], [0]],
  [[0.1, 0.3, 0.4], [0]],
  [[0.4, 0.5, 0.3], [0]]
];
//const getTrainingData = () => trainingData[_.random(0, trainingData.length - 1)];
this.learningRate = .3;

}

getTrainingData = () => this.trainingData[_.random(0, this.trainingData.length - 1)];

//getTrainingData = () => this.trainingData;

//log('Training...');

ngOnInit (){

  this.tootame(); 

}


kaivita2(){


  setInterval (() => {
          this.tootame();
    }, 7000);
}

kaivita() {
  this.tootame()
}

ennustame:any;
sisend:any;
vastus:any;

tootame () {

_.times(10000, () => {
  const data = this.getTrainingData();
  const input = data[0];
  const output = data[1];
  this.xorNetwork.activate(input);
  this.xorNetwork.propagate(this.learningRate, output);
});
//log('Mudel on treenitud. ');

//log('Ennustus');
_.times(1, () => {
  const data = this.getTrainingData();
  //const input = data[0]; //see on sisend
  const input = [this.getsisendEsimene(),this.getsisendTeine(), this.getsisendKolmas()]; //panime oma sisendi
  this.sisend = input;
  const output = this.xorNetwork.activate(input);
  const prediction = _.round(output[0]);
  const answer = data[1][0];
  this.vastus = answer;
  const isCorrect = prediction === answer;
  const label = isCorrect ? 'Correct' : 'Incorrect';
  const confidence = _.round(100 * (1 - Math.abs(answer - output[0])), 2);
  
//  log(`${JSON.stringify(input)} -> ${JSON.stringify([prediction])} ${label} (Confidence: ${confidence}%)\n`);
//  log('\n');

  //Ennustustulemus
  this.ennustame = prediction;
  localStorage.setItem("ennustusRaudtee", JSON.stringify(this.ennustame));
   

  console.log("Ennustus", prediction);
});
}
//}

 }