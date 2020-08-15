import React from 'react';
import api from '../utils/Api';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    };
  }

  componentDidMount() {
    api.getUserInfo()
    .then(result => {
      this.setState({
        userName: result.name,
        userDescription: result.about,
        userAvatar: result.avatar,
      });
    });

    api.getInitialCards()
    .then(result => {
      this.setState({
        cards: result,
      });
    });

  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__container">
              <div onClick={this.props.onEditProfile} className="profile__overlay-container">
                <div className="profile__overlay"></div>
                <img src={this.state.userAvatar} alt="profile-picture" className="profile__picture" />
              </div>
              <div className="profile__info">
              <div className="profile__wrapper">
                  <h1 className="profile__title">{this.state.userName}</h1>
                  <button onClick={this.props.onEditAvatar} className="profile__edit-button hover-button" aria-label="Edit"></button>
              </div>
              <p className="profile__subtitle">{this.state.userDescription}</p>
              </div>
          </div>
          <button onClick={this.props.onAddPlace} className="profile__add-button hover-button" aria-label="Add"></button>
        </section>
        <section className="elements">
          <ul className="elements__container">
            {this.state.cards.map(card => (
              < Card key={card._id} onCardClick={this.props.onCardClick} card={card} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;
