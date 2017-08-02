import React from 'react';

export const MessagesSettings = ({ onChange, checkedValue }) => (
  <p>
    <p className="bold">Messages</p>
    <p>Control who can send you messages.</p>
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
    <p className="bold">Profile Visibility</p>
    <p>Manage who can see your activity,
            things you fancy, your followers,
            people you follow or in anyone’s search results.
    </p>
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
    <p className="bold">Recently viewed</p>
    <p>Manage your fancy Manage your Fancy browsing history.</p>
    <a href="">Delete all items</a>
  </p>
);
