/* 
 * @Author: Marte
 * @Date:   2018-11-17 09:33:13
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-17 17:29:48
 */

window.onload = function() {
	var txt = document.getElementById('txt');
	var jia = document.getElementById('jia');
	var jian = document.getElementById('jian');
	jia.onclick = function() {
		var _txt = txt.value;
		_txt++;
		txt.value = _txt;
		num1.innerHTML = "119.99 py6.x" + txt.value + "=" + parseInt(txt.value * 119.99 * 100) / 100 + "py6.";
	}
	jian.onclick = function() {
		var _txt = txt.value;
		if(_txt > 0) {
			_txt--;
			txt.value = _txt;
		} else if(_txt <= 0) {
			_txt = 0;
			txt.value = _txt;
		}
		num1.innerHTML = "119.99 py6." + "×" + txt.value + "=" + parseInt(txt.value * 119.99 * 100) / 100 + "py6.";
	}

}