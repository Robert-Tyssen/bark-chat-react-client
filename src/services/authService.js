export const loginEmailPassword = async (email, password) => {
  // TODO - replace with actual login implementation
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if (email === 'test123@test.com' && password === '123456') {
        resolve({ userId: 'someUserId', email: 'test123@test.com', token: '123abc' });
      }

      reject(new Error('invalid-credentials'));
      
    }, 1000);
  });
} 