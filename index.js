sicknesses = [
  {
    name: 'Caries',
    symptoms: []
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
    name: 'Sangrado'
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
