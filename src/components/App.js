import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: 0,
    };
  }

  handleEditAvatarClick = () => {
    this.setState({
      isEditAvatarPopupOpen: true,
    });
  }

  handleEditProfileClick = () => {
    this.setState({
      isEditProfilePopupOpen: true,
    });
  }

  handleAddPlaceClick = () => {
    this.setState({
      isAddPlacePopupOpen: true,
    });
  }

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: undefined,
    });
    console.log("hello");
  }

  handleCardClick = (card) => {
    this.setState({
      selectedCard: card,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="page">
          < Header />
          < Main
            onEditProfile={this.handleEditAvatarClick}
            onAddPlace={this.handleAddPlaceClick}
            onEditAvatar={this.handleEditProfileClick}
            onCardClick={this.handleCardClick}
          />
          < Footer />
          {/* Edit name & occupation */}
          < PopupWithForm name="edit" title="Edit profile" value="Save"
            isOpen={this.state.isEditProfilePopupOpen}
            onClose={this.closeAllPopups}
            firstInput={
              <>
                <input type="text" id="name-input" className="form__input popup__item popup__name" name="userName" placeholder="Name" minLength="2" maxLength="40" pattern="[A-Za-z -]{1,}" required />
                <span id="name-input-error" className="form__input-error"></span>
              </>
            }
            secondInput={
              <>
                <input type="text" id="about-input" className="form__input popup__item popup__about" name="userJob" placeholder="About me" minLength="2" maxLength="200" required />
                <span id="about-input-error" className="form__input-error"></span>
              </>
            }
          />
          {/* Adding new place */}
          < PopupWithForm name="add" title="New Place" value="Create"
            isOpen={this.state.isAddPlacePopupOpen}
            onClose={this.closeAllPopups}
            firstInput={
              <>
                <input type="text" id="title-input" className="form__input popup__item popup__place-title" name="name" placeholder="Title" minLength="1" maxLength="30" required />
                <span id="title-input-error" className="form__input-error"></span>
              </>
            }
            secondInput={
              <>
                <input type="url" id="link-input" className="form__input popup__item popup__image-link" name="link" placeholder="Link" required />
                <span id="link-input-error" className="form__input-error"></span>
              </>
            }
          />
          {/* Open image */}
          < ImagePopup
            isOpen={this.state.selectedCard}
            onClose={this.closeAllPopups}
          />
          {/* Delete card? */}
          < PopupWithForm name="delete" title="Are you sure?" value="Yes" />
          {/* Changing profile picture */}
          < PopupWithForm name="picture" title="Change profile picture" value="Create"
            isOpen={this.state.isEditAvatarPopupOpen}
            onClose={this.closeAllPopups}
            firstInput={
              <>
                <input type="url" id="link-input" className="form__input popup__item popup__image-link" name="link" placeholder="Link" required />
                <span id="link-input-error" className="form__input-error"></span>
              </>
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
