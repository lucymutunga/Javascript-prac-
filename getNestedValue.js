const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Bachelor of Science',
      school: 'ABC University',
      year: 2020
    }
  };
  
  function getNestedValue(obj, key) {
    const keys = key.split('.');
    let value = obj;
    for (let i = 0; i < keys.length; i++) {
      if (value[keys[i]] === undefined) {
        return undefined;
      }
      value = value[keys[i]];
    }
    return value;
  }
  
  const degree = getNestedValue(user, 'education.degree');
  console.log(degree); 
  