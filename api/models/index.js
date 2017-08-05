import mongoose from 'mongoose';

const userPreferenceSchema = mongoose.Schema({
  userId: String,
  language: String,
  currency: String,
  timeZone: String,
  profileVisibility: String,
  receiveMessagesFrom: String,
  autoAddToCategoryList: String,
  smsNotifications: String,
  enableSaveButton: Boolean,
}, { versionKey: false }); // to stop it from returning __v

export const UserPreference = mongoose.model('UserPreference', userPreferenceSchema);


export const DefaultPreference = {
  language: 'English',
  currency: 'USD',
  timeZone: '(UTC+2:00)',
  profileVisibility: 'private',
  receiveMessagesFrom: 'everyone',
  autoAddToCategoryList: 'disabled',
  smsNotifications: 'disabled',
};
