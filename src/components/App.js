import React, {Component} from 'react';
import Header from './Header.js';
import Form from './Form.js'
import RegisterSuccess from './RegisterSuccess';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      fullName: '',
      fullNameErrorState: false,
      cuil: '',
      cuilErrorState: false,
      street: '',
      streetErrorState: false,
      streetNumber: '',
      streetNumberErrorState: false,
      province: '0',
      provinceErrorState: false,
      city: '0',
      cityErrorState: false,
      mail: '',
      mailErrorState: false,
      password: '',
      passwordErrorState: false,
      showPassword: false
    }
  }
  onFieldChange(event, provinceChanged) {
    const {value, name, type, checked} = event.target;
    this.setState({
      city: provinceChanged
        ? '0'
        : this.state.city,
      [name]: (type === 'checkbox' ? checked : value)
    });
  }
  onPressNext() {
    const {currentStep} = this.state;
    let formStepValid;
    switch (currentStep) {
      case 1:
        formStepValid = this._validateStepOne();
        break;
      case 2:
        formStepValid = this._validateStepTwo();
        break;
      case 3:
        formStepValid = this._validateStepThree();
        break;
      default:
        formStepValid = false;
    }

    if (formStepValid) {
      if (currentStep === 3) {
        fetch('http://www.mocky.io/v2/5b9209ba3100007900939b0e?mocky-delay=2500ms')
        .then(() => this._moveToNextStep());
      } else {
        this._moveToNextStep();
      }
    }
  }
  _moveToNextStep() {
    const {currentStep} = this.state;
    this.setState({
      currentStep: currentStep + 1
    })
  }
  onPressBack() {
    const {currentStep} = this.state;
    this._cleanActualStepValues(currentStep);
    if (currentStep > 1)
      this.setState({
        currentStep: currentStep - 1
      });
    }

  _cleanActualStepValues(currentStep) {
    switch (currentStep) {
      case 1:
        this.setState({fullName: '', fullNameErrorState: false, cuil: '', cuilErrorState: false});
        break;
      case 2:
        this.setState({
          street: '',
          streetErrorState: false,
          streetNumber: '',
          streetNumberErrorState: false,
          province: '0',
          provinceErrorState: false,
          city: '0',
          cityErrorState: false
        });
        break;
    }
  }

  /***** START VALIDATIONS *****/
  /* Step 1 */
  _validateStepOne() {
    const fullNameValid = this._validateFullName();
    const cuilValid = this._validateCuil();
    return fullNameValid && cuilValid;
  }

  _validateFullName() {
    const {fullName} = this.state;
    var aNameWords = fullName.trim().split(' ');

    const fullNameValid = aNameWords.length > 1;
    this.setState({
      fullNameErrorState: !fullNameValid
    });

    return fullNameValid;
  }

  _validateCuil() {
    const {cuil} = this.state;
    const cuilValid = cuil.length === 11 && !isNaN(Number(cuil));
    this.setState({
      cuilErrorState: !cuilValid
    });

    return cuilValid;
  }
  /* End Step 1 */
  /* Step 2 */
  _validateStepTwo() {
    const streetValid = this._validateStreet();
    const streetNumberValid = this._validateStreetNumber();
    const provinceValid = this._validateProvince();
    const cityValid = this._validateCity();

    return streetValid && streetNumberValid && provinceValid && cityValid;
  }

  _validateStreet() {
    const {street} = this.state;
    const streetValid = street.trim().length > 0;
    this.setState({
      streetErrorState: !streetValid
    });

    return streetValid;
  }

  _validateStreetNumber() {
    const {streetNumber} = this.state;
    const streetNumberValid = streetNumber.trim().length > 0 && !isNaN(Number(streetNumber));
    this.setState({
      streetNumberErrorState: !streetNumberValid
    });

    return streetNumberValid;
  }

  _validateProvince() {
    const {province} = this.state;
    const provinceValid = province !== '0';
    this.setState({
      provinceErrorState: !provinceValid
    });

    return provinceValid;
  }

  _validateCity() {
    const {city} = this.state;
    const cityValid = city !== '0';
    this.setState({
      cityErrorState: !cityValid
    });

    return cityValid;
  }
  /* Step 2 */

  /* Step 3 */
  _validateStepThree() {
    const mailValid = this._validateMail();
    const passwordValid = this._validatePassword();
    return mailValid && passwordValid;
    //
  }

  _validateMail() {
    const mailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const mailValid = mailRegex.test(this.state.mail);

    this.setState({
      mailErrorState: !mailValid
    });

    return mailValid;
  }

  _validatePassword() {
    const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/);
    const passwordValid = passwordRegex.test(this.state.password);

    this.setState({
      passwordErrorState: !passwordValid
    });

    return passwordValid;
  }
  /* Step 3 */
  /***** END OF VALIDATIONS *****/

  render() {
    return (<div className='appContainer'>

      {
        this.state.currentStep < 4 ?
        (
          <div>
            <Header currentStep={this.state.currentStep}/>
            <Form
              values={this.state}
              onFieldChange={this.onFieldChange.bind(this)}
              onPressNext={this.onPressNext.bind(this)}
              onPressBack={this.onPressBack.bind(this)}/>
          </div>
        ) :
        <RegisterSuccess />
      }
    </div>);
  }
}

export default App;
