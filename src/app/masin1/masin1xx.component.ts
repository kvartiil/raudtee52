import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Layer, Network } from 'synaptic';
import log from './log';

//import { products } from '../products';

@Component({
  selector: 'masin1-component',
  templateUrl: './masin1.component.html',
  styleUrls: ['./masin1.component.scss']
})
export class Masin1Component {

  /**
 * Neural network for predicting the XOR operator.
 */

// Create layers
input = new Layer(2);
hidden = new Layer(3);
output = new Layer(1);
xorNetwork: any;

masinake () {
// Connect layers
this.input.project(this.hidden);
this.hidden.project(this.output);

// Create network
this.xorNetwork = new Network({
  input,
  hidden: [hidden],
  output,
});

// Train the network
const trainingData = [
  [[0, 0], [0]],
  [[1, 0], [1]],
  [[0, 1], [1]],
  [[1, 1], [0]],
];
const getTrainingData = () => trainingData[_.random(0, trainingData.length - 1)];
const learningRate = .3;

log('Training...');
_.times(10000, () => {
  const data = getTrainingData();
  const input = data[0];
  const output = data[1];
  xorNetwork.activate(input);
  xorNetwork.propagate(learningRate, output);
});
log('Training done.');

log('Predicting XOR');
_.times(100, () => {
  const data = getTrainingData();
  const input = data[0];
  const output = xorNetwork.activate(input);
  const prediction = _.round(output[0]);
  const answer = data[1][0];
  const isCorrect = prediction === answer;
  const label = isCorrect ? 'Correct' : 'Incorrect';
  const confidence = _.round(100 * (1 - Math.abs(answer - output[0])), 2);

  log(`${JSON.stringify(input)} -> ${JSON.stringify([prediction])} ${label} (Confidence: ${confidence}%)`);
});
  
}
}