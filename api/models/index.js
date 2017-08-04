import mongoose from 'mongoose';

const userPreferenceSchema = mongoose.Schema({
  sessionId: String,
  language: String,
  currency: String,
  timeZone: String,
  profileVisibility: String,
  receiveMessagesFrom: String,
  autoAddToCategoryList: String,
  smsNotifications: String,
  enableSaveButton: Boolean,
});

export const UserPreference = mongoose.model('UserPreference', userPreferenceSchema);
