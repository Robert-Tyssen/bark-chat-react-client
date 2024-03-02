export const loginEmailPassword = async (email, password) => {
  // TODO - replace with actual login implementation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userId: 'someUserId', email: 'test123@test.com' });
    }, 3000);
  });
} 