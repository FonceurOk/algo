function makeSum(a, b) {
    const result = a + b
    return result
  }
  
  console.log(makeSum(2, 2)) // 4
  console.log(makeSum(4, 2)) // 6
  
  function addition(a, b) {
    const result = a + b
    return result
  }
  console.log(addition(2, 3)); // Résultat attendu : 5
  
  function salutation(nom) {
    const result = 'Bonjour ' + nom
    return result
  }
  console.log(salutation("Alice")); // Résultat attendu : "Bonjour Alice"
  
  function estPair(nombre) {
    if (nombre % 2 === 0) {
      const result = 'true'
      return result
    } else {
      const result = 'false'
      return result
    }
  }
  console.log(estPair(4)); // Résultat attendu : true
  console.log(estPair(7)); // Résultat attendu : false
  
  function aireRectangle(a, b) {
    const result = a * b
    return result
  }
  
  console.log(aireRectangle(5, 3)); // Résultat attendu : 15
  
  function estMajuscule(mot) {
    if (mot === 'HELLO') {
      const result = true
      return result
    } else {
      const result = false
      return result
    }
  }
  
  console.log(estMajuscule("HELLO")); // Résultat attendu : true
  console.log(estMajuscule("Hello")); // Résultat attendu : false
  
  function maxDeuxNombres(a, b) {
    const result = b
    return result
  }
  
  console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10
  
  function difference(a, b) {
    const result = a - b
    return result
  }
  
  console.log(difference(10, 3)); // Résultat attendu : 7
  
  function convertirEnCelsius(celsius) {
    var fTemp = celsius;
  
    var fToCel = (fTemp - 32) * 5 / 9;
  
    const result = fToCel
    return result
  }
  
  console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778
  
  function estMajeur(age) {
    if (age < 18)
    { 
       return false
    }
    else
    { 
      return true
    }
  }
  console.log(estMajeur(20)); // Résultat attendu : true
  console.log(estMajeur(16)); // Résultat attendu : false
  
  function maxTroisNombres(a, b, c) {
    return b
  }
  console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7
  
  function calculer(a, b, operation) {
    // return a operation b
  }
  function addition(x, y) {
  }
  function multiplication(x, y) {
  }
  
  console.log(calculer(5, 3, 'e')); // Résultat attendu : 8
  console.log(calculer(5, 3, 'd')); // Résultat attendu : 15