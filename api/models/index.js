import mongoose from 'mongoose';

const userPreferenceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  language: { type: String, required: true },
  currency: { type: String, required: true },
  timeZone: { type: String, required: true },
  profileVisibility: { type: String, required: true },
  receiveMessagesFrom: { type: String, required: true },
  autoAddToCategoryList: { type: String, required: true },
  smsNotifications: { type: String, required: true },
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
