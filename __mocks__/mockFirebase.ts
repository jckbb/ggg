jest.mock('react-native-firebase', () => {
  return {
    firestore: jest.fn(() => ({
      onNotification: jest.fn(),
      onNotificationDisplayed: jest.fn(),
      collection: jest.fn((collectionPath) => ({
        get: jest.fn((querySnapshot) => {})
      }))
    })),
  };
});