document.getElementById('btn-simple').onclick = doFunction;
document.gelElementById('btn-simple').onclick = function () { alert('hahahaha'); };

var el = document.getElementById('btn-simple');
  if (el.addEventListener)
    el.addEventListener('click', doFunction, false);
  else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
