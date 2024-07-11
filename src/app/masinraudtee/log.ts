export default function log(message) {
  document.getElementById('log').innerText += `\n${new Date().toLocaleTimeString()}: ${message}`;
}