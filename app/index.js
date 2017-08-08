// 意思是从 lodash 里得到默认导出，并将默认导出命名为 _，这个 _ 可以换成任何一个其他的变量名。
import _ from 'lodash'
import $ from 'jquery'
import foo from './foo'


function component() {
  // var element = document.createElement('div');
  var element= $('<div></div>');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.html(_.join(['hello','webpack'],''))
  

  // return element;
  return element.get(0);
}

document.body.appendChild(component());
console.log(foo)
console.log(foo())