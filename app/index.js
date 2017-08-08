// 意思是从 lodash 里得到默认导出，并将默认导出命名为 _，这个 _ 可以换成任何一个其他的变量名。
import _ from 'lodash'

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());