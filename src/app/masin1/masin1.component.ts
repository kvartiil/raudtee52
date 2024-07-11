import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Layer, Network } from 'synaptic';

import log from './log';

/**
 * Neural network for predicting the XOR operator.
 */

 @Component({
  selector: 'masin1-component',
  templateUrl: './masin1.component.html',
  styleUrls: ['./masin1.component.scss']
})

 export class Masin1Component implements OnInit {
// Create layers

trainingData: any;
xorNetwork: any;
learningRate: any;

constructor () {

const input = new Layer(2);
const hidden = new Layer(3);
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
  [[0, 0], [0]],
  [[1, 0], [1]],
  [[0, 1], [1]],
  [[1, 1], [0]],
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

tootame () {

_.times(10000, () => {
  const data = this.getTrainingData();
  const input = data[0];
  const output = data[1];
  this.xorNetwork.activate(input);
  this.xorNetwork.propagate(this.learningRate, output);
});
log('Training done.');

log('Predicting XOR');
_.times(1, () => {
  const data = this.getTrainingData();
  const input = data[0];
  const output = this.xorNetwork.activate(input);
  const prediction = _.round(output[0]);
  const answer = data[1][0];
  const isCorrect = prediction === answer;
  const label = isCorrect ? 'Correct' : 'Incorrect';
  const confidence = _.round(100 * (1 - Math.abs(answer - output[0])), 2);
  
  log(`${JSON.stringify(input)} -> ${JSON.stringify([prediction])} ${label} (Confidence: ${confidence}%)\n`);
  log('\n');
  console.log("Ennustus", prediction);
});
}
//}

 }