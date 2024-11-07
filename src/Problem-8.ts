
function validateKeys<T extends object>
(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
  }
  
 
  const personDetails = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(personDetails, ["name", "age"])); // Output: true
  