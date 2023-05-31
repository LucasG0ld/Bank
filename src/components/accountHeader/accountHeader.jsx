import React, { useState, useEffect } from 'react';
import "./accountHeader.css";
import { fetchUserProfile } from '../../utils/fetch';
import { updateUserProfile } from '../../utils/fetch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateName, TOKEN_STORAGE_KEY, selectFirstName, selectLastName } from '../../features/nameSlice';

function AccountHeader() {
  const [isEditing, setIsEditing] = useState(false);
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const dispatch = useDispatch();
  const sessionToken = sessionStorage.getItem(TOKEN_STORAGE_KEY);
  const localToken = localStorage.getItem(TOKEN_STORAGE_KEY);
  const token = sessionToken || localToken;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();

    try {
      const newFirstName = document.getElementById('firstname').value;
      const newLastName = document.getElementById('lastname').value;

      await updateUserProfile(newFirstName, newLastName, token);

      dispatch(updateName({ firstName: newFirstName, lastName: newLastName }));
      setIsEditing(false);
    } catch (error) {
      console.log("Le nom n'a pas pu être modifié")
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();

    setIsEditing(false);
  };

  useEffect(() => {
    const getUserProfile = async () => {
      const userProfile = await fetchUserProfile();
      if (userProfile) {
        dispatch(updateName({
          firstName: userProfile.firstName,
          lastName: userProfile.lastName
        }));
      }
    };
    getUserProfile();
  }, []);

  return (
    <section>
      <div className="header">
        <h1>Welcome back</h1>

        {!isEditing && (
          <div>
            <h1 id="header-name">{firstName} {lastName}!</h1>
            <button className="edit-button" id="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </div>
        )}
        {isEditing && (
          <form id="name-form" className="">
            <div className="form-name">
              <div className="input-wrapper">
                <input type="text" id="firstname" placeholder={firstName} />
              </div>
              <div className="input-wrapper">
                <input type="text" id="lastname" placeholder={lastName} />
              </div>
            </div>

            <div className="button-container">
            <button type="submit" className="save-button" onClick={handleSaveClick}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
            </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default AccountHeader;