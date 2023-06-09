function transformTextToNumber(texto) {
    const numberMap = {
      "zero": 0,
      "um": 1,
      "dois": 2,
      "três": 3,
      "quatro": 4,
      "cinco": 5,
      "seis": 6,
      "sete": 7,
      "oito": 8,
      "nove": 9
    };
  
    const propriedade = texto.toLowerCase();
  
    // Verificar se a palavra existe no mapeamento
    // hasOwnProperty é um método que verifica se existe uma propriedade específica no Objeto.
    if (numberMap.hasOwnProperty(propriedade)) {
      return numberMap[propriedade];
    } else {
      return texto; // Retornar o texto original se não for uma palavra numérica conhecida
    }
}
