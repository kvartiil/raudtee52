import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Layer, Network } from 'synaptic';

import log from './log';

/**
 * Neural network for predicting the XOR operator.
 */

 @Component({
  selector: 'masinelastsus-component',
  templateUrl: './masinelastsus.component.html',
  styleUrls: ['./masinelastsus.component.scss']
})

 export class MasinelastsusComponent implements OnInit {
// Create layers


voti1 = 'voimMadal';
sisend1: string;
sisend1a: number;
getsisendEsimene() {
  this.sisend1 = localStorage.getItem(this.voti1);
  this.sisend1a=Number(this.sisend1);
  return this.sisend1a;
}

voti2 = 'voimKeskmine';
sisend2: string;
sisend2a: number;
getsisendTeine() {
  this.sisend2 = localStorage.getItem(this.voti2);
  this.sisend2a=Number(this.sisend2);
  return this.sisend2a;
}

//voti3 = 'makseKorge';
//sisend3: string;
//sisend3a: number;
//getsisendKolmas() {
//  this.sisend3 = localStorage.getItem(this.voti3);
//  this.sisend3a=Number(this.sisend3);
//  return this.sisend3a;
//}


trainingData: any;
xorNetwork: any;
learningRate: any;

constructor () {

const input = new Layer(2);
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
  [[1, 0], [1]],
  [[0.7, 0.1], [1]],
  [[0.3, 0.9], [0]],
  [[0, 1], [0]],
  [[0.1, 0.7], [0]],
  [[0.9, 0.1], [1]]
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
  const input = [this.getsisendEsimene(),this.getsisendTeine()]; //panime oma sisendi
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
  localStorage.setItem("ennustusElastsus", JSON.stringify(this.ennustame));
   

  console.log("Ennustus", prediction);
});
}
//}

 }