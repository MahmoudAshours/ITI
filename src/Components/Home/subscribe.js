import React from 'react';
import '../Styles/main.scss';


export default class Subscribe extends React.Component {
    constructor() {
        super();
        this.state = {
            subscribedUrl: 'http://localhost:3005/subcriptions',
            email: '',
            emails: [],
            acceptedEmail: '',
            emailMessage: '',
        }
    }
    render() {
        return (
            <section className="subscribe">
                <h1 className="heading-subs mb-md">Subscribe!</h1>
                <form onSubmit={this.handleOnSubmit} className="mb-md">
                    <input type="text" placeholder="Youremail@gmail.com" onChange={this.handleEmailChange} />
                </form>
                <div>
                    <p> {this.state.emailMessage}</p>
                </div>
            </section>
        )
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.checkDuplicated(this.state.email, this.state.emails) && this.validateEmail(this.state.email)) {
            this.setState({
                emailMessage: 'You can\'t enter the same E-mail twice!',
            })
        } else if (this.validateEmail(this.state.email)) {
            this.setState(
                (state) => ({
                    emails: [...state.emails, this.state.email],
                    emailMessage: 'Passed'
                }))
            this.handleSubscribes(this.state.email);
        } else {
            this.setState({
                emailMessage: 'This is not an E-mail!'
            })
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }

    validateEmail(email) {
        var hasEmailAnnotation = false;
        var hasDot = false;
        for (var i = 0; i < email.length; i++) {
            if (email[i] === '@')
                hasEmailAnnotation = true;
            if (email[i] === '.')
                hasDot = true;
        }

        if (!hasEmailAnnotation || !hasDot) {
            return false;
        } else {
            return true;
        }
    }

    checkDuplicated(email, emailArray) {
        if (emailArray.indexOf(email) > -1) {
            return true;
        } else {
            return false;
        }
    }
    async handleSubscribes(acceptedMail) {
        const subscribedUser = {
            email: acceptedMail,
            id: await this.getLastId()
        }
        const postMethod = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(subscribedUser)
        }
        await fetch(`http://localhost:3005/subcriptions`, postMethod);
    }
    async getLastId() {
        var subscriptionsResponse = await fetch(this.state.subscribedUrl);
        var subscriptionsData = await subscriptionsResponse.json();
        var lastItem = await subscriptionsData.pop();
        return ++lastItem.id;
    }
}