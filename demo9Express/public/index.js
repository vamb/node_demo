
  var name = 'test1'
  console.log(name)
  if(true){
    var name = 'test2'
    console.log(name)
  }

  let age = 30
  console.log(age)
  if(true){
    let age = 27
    console.log(age)
  }

  var code = 'code1'
  console.log(code)
  if(true){
    let code = 'code2'
    console.log(code)
  }
  console.log(code)

  for(var j=0;j<5;j++){
    console.log(j)
  }

  for(var i=0;i<5;i++){
    setTimeout(()=>console.log(i), 0)
  }
