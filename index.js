function cal() {
    let num = document.getElementById("num").value;
    let unit = document.getElementById("unit").value;
    let to_unit = document.getElementById("to_unit").value;
    let res;
    switch (unit + '-' + to_unit) {
      case 'km-cm':
        res = num * 100000;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'cm-km':
        res = num / 100000;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'km-m':
        res = num * 1000;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'm-km':
        res = num / 1000;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'cm-m':
        res = num / 100;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'm-cm':
        res = num * 100;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'kg-gram':
        res = num * 1000;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      case 'gram-kg':
        res = num / 1000;
        document.getElementById("para").innerHTML = res + to_unit;
        break;
      default:
        document.getElementById("para").innerHTML = "Invalid conversion";
    }
  }