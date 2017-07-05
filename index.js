sicknesses = [
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
    $('input').each(function(index, input){
      if ($(input).is(":checked"))
      {
        obj[index] = true;
      }
      else{
        obj[index] = false;
      }
    })
    console.log(obj);
  })
})
