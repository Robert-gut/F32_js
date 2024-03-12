const math = {
  plus: function  (num1, num2){
    return num1 + num2
  },
  
  multiplication: function  (num1, num2){
    return num1 * num2
  },
  
  minus: function  (num1, num2){
    return num1 - num2
  },
  
  division: function  (num1, num2){
    return num1 / num2
  },
}

// export default math

export const plus = math.plus
export const multiplication = math.multiplication
export const minus = math.minus
export const division = math.division