import React from 'react';


export default function NotificationSettings({ onChange, checkedValue }) {
  return (
    <div>
      <p className="bold section-label">SMS Notifications</p>
      <p className="subtext">Enable SMS notifications to send text message alert notifications
            to your mobile phone for your purchased orders.</p>
      <div>
        <input
          type="radio"
          name="smsNotifications"
          value="enabled"
          onClick={onChange}
          checked={checkedValue === 'enabled'}
        />
        Enable
        <input
          type="radio"
          name="smsNotifications"
          value="disabled"
          onClick={onChange}
          checked={checkedValue === 'disabled'}
        />
        Disable
      </div>
    </div>
  );
}
