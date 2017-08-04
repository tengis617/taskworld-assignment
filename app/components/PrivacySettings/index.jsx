import React from 'react';

export const MessagesSettings = ({ onChange, checkedValue }) => (
  <p>
    <label>Messages</label>
    <small>Control who can send you messages.</small>
    <div onClick={onChange} >
      <input
        type="radio"
        name="receiveMessagesFrom"
        value="everyone"
        checked={checkedValue === 'everyone'}
      />
      Everyone
      <input
        type="radio"
        name="receiveMessagesFrom"
        value="peopleYouFollow"
        checked={checkedValue === 'peopleYouFollow'}
      />
      People you follow
      <input
        type="radio"
        name="receiveMessagesFrom"
        value="noOne"
        checked={checkedValue === 'noOne'}
      />
      No one
    </div>
  </p>
);

export const ProfileVisibilitySettings = ({ onChange, checkedValue }) => (
  <p>
    <label>Profile Visibility</label>
    <small>Manage who can see your activity,
            things you fancy, your followers,
            people you follow or in anyone’s search results.
    </small>
    <div onClick={onChange} >
      <input
        type="radio"
        name="profileVisibility"
        value="everyone"
        id="profileVisibilityEveryone"
        checked={checkedValue === 'everyone'}
      />
          Everyone
      <input
        type="radio"
        name="profileVisibility"
        value="private"
        id="profileVisibilityPrivate"
        checked={checkedValue === 'private'}
      />
          Private
    </div>
  </p>
);

export const RecentlyViewedSettings = () => (
  <p>
    <label>Recently viewed</label>
    <small>Manage your fancy Manage your Fancy browsing history.</small>
    <p><a href="">Delete all items</a></p>
  </p>
);
