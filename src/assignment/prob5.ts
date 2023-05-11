function logString(param: unknown): void {
    if (typeof param === 'string') {
      console.log(param);
    } else {
      console.error('Error: parameter is not a string');
    }
  }
  