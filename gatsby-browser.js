import React from 'react';
import { render } from 'react-dom';
import Flowchart from 'react-simple-flowchart';

render()

export function onRouteUpdate({ location, prevLocation } = {}, options){
  function onError(error) {
    console.log(error);
  }
  var els = document.getElementsByClassName("flowchart");
  console.log(els)
  var c = els.length;
  for (var i = 0; i < c; i++) {
    render(<Flowchart chartCode={els[i].childNodes[0].nodeValue} options={options} onError={onError} />, els[i])
  }
}
