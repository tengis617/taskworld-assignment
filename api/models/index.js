import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  preferences: {
    language: { type: String, required: true },
    currency: { type: String, required: true },
    timeZone: { type: String, required: true },
    profileVisibility: { type: String, required: true },
    receiveMessagesFrom: { type: String, required: true },
    autoAddToCategoryList: { type: String, required: true },
    smsNotifications: { type: String, required: true },
  },
}, { versionKey: false }); // to stop it from returning __v

export const User = mongoose.model('User', userSchema);

export const DefaultPreferences = {
  language: 'English',
  currency: 'USD',
  timeZone: '(UTC+2:00)',
  profileVisibility: 'private',
  receiveMessagesFrom: 'everyone',
  autoAddToCategoryList: 'disabled',
  smsNotifications: 'disabled',
};
