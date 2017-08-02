import React from 'react';


export default function NotificationSettings({ onChange, checkedValue }) {
  return (
    <div>
      <p className="bold">SMS Notifications</p>
      <p>Enable SMS notifications to send text message alert notifications
            to your mobile phone for your purchased orders.</p>
      <div onClick={onChange}>
        <input
          type="radio"
          name="smsNotifications"
          value="enabled"
          checked={checkedValue === 'enabled'}
        />
        Enable
        <input
          type="radio"
          name="smsNotifications"
          value="disabled"
          checked={checkedValue === 'disabled'}
        />
        Disable
      </div>
    </div>
  );
}
