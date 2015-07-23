document.all('btn-simple').onclick = doFunction;
document.all('btn-simple').onclick = function () { alert('hahahaha'); };

var el = document.all('btn-simple');
  if (el.addEventListener)
    el.addEventListener('click', doFunction, false);
  else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);
