Array.prototype.equals = function (array) {
  if (!array)
  return false;

  if (this.length != array.length)
  return false;

  for (var i = 0, l=this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
      return false;
    }
    else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
}
var sicknesses = [
  {
    name: 'Caries',
    symptoms: [0, 1, 2, 3]
  },
  {
    name: 'Gingivitis',
    symptoms: [4, 5, 6]
  },
  {
    name: 'Periodontitis',
    symptoms: [3, 6, 7, 8]
  },
  {
    name: 'Halitosis',
    symptoms: [6]
  },
  {
    name: 'Enfermedad periodontal',
    symptoms: [6, 9, 10, 11, 12]
  },
  {
    name: 'Aftas',
    symptoms: [10, 13, 14]
  },
  {
    name: 'Leucoplasia',
    symptoms: [15, 16, 17, 18]
  }
]

var symptoms = [
  {
    name: 'Cambio de color'
  },
  {
    name: 'Área opaca'
  },
  {
    name: 'Cavidad en esmalte'
  },
  {
    name: 'Sensibilidad'
  },
  {
    name: 'Encías rojas'
  },
  {
    name: 'Encías retrocedidas'
  },
  {
    name: 'Mal aliento'
  },
  {
    name: 'Sangrado al cepillar'
  },
  {
    name: 'Sangrado al comer'
  },
  {
    name: 'Sangrado inexplicable'
  },
  {
    name: 'Dolor'
  },
  {
    name: 'Dientes Largos'
  },
  {
    name: 'Dientes flojos'
  },
  {
    name: 'Úlceras'
  },
  {
    name: 'Ganglios inflamados'
  },
  {
    name: 'Manchas blancas'
  },
  {
    name: 'Áreas irregulares'
  },
  {
    name: 'Engrosamientos'
  },
  {
    name: 'Lesiones'
  },
]

$(function(){

  symptoms.forEach(function(symptom, index){
    $('.options').append(`<input id="opt_${index}" type="checkbox" name="opt_${index}" value="${index}">`)
    $('.options').append(`<label for="opt_${index}">${symptom.name}</label><br>`)
  })

  // Search listener
  $('#search').click(function(){
    var obj = {}
    var selected = [];
    $('input').each(function(index, input){
      obj[index] = $(input).is(":checked");
    })
    for (var k in obj) {
      if (obj[k] === true) {
        selected.push(k)
      }
    }
    var flag = false;
    var name;
    sicknesses.forEach(function(sickness){
      if (sickness.symptoms.equals(selected)) {
        flag = true;
        name = sickness.name;
      }
    })
    if (flag === true) {
      $('.title').html(`El diagnóstico es ${name}.`);
    }
    else{
      $('.title').html(`No hay un diagnóstico especificado.`);
    }
  })
})
