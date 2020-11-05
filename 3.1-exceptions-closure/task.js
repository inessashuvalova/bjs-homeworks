// Task 1

function parseCount(a) {
  let result = Number.parseInt(a);
  if (Number.isNaN(result)) {
      throw new Error('Невалидное значение')
  }
  return result;
}

function validateCount(a) {
  try {
      return parseCount(a);
  } catch (e) {
      return (e);
  }
}

// Task 2

class Triangle {
  constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.P = a + b + c;
  
   if (a + b < c || b + c < a || a + c < b ) {
              throw new Error('Треугольник с такими сторонами не существует');
          }
      }
  
 getPerimeter() {
  return this.P;
}

 getArea() {
    let p = this.P / 2;
    let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(S.toFixed(3));
  }
}
   function getTriangle(a, b, c) {
     try {
     return new Triangle(a, b, c);
     
  } catch {
    const TriangleFiction = {
          getPerimeter() {
              return 'Ошибка! Треугольник не существует';
          },
          getArea() {
              return 'Ошибка! Треугольник не существует';
          }
  }
}
   }
 
