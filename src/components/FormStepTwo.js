import React, { Component } from 'react';
import Input from './Input';
import Combobox from './Combobox';

class FormStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
      cities: [],
      cityEnabled: false
    }
  }

  componentDidMount() {
    fetch('/api/provinces.json')
    .then(results => results.json())
    .then(data => {
      this.setState({
        provinces: [{id: '0', name: 'Seleccionar'}, ...data],
        cities: [{id: '0', name: 'Seleccionar'}]
      })
    })
    .catch(error => {this.setState({provinces: [{id: '0', name: 'Seleccionar'}], cities: [{id: '0', name: 'Seleccionar'}]})});
  }

  onChangeProvince(event) {
    this._searchCities(event.target.value);
    this.props.onFieldChange(event, true);
  }

  _searchCities(provinceId) {
    this.setState({cityEnabled: false});
    fetch(`/api/provinces/${provinceId}.json`)
    .then(results => results.json(): false)
    .then(data => {
      this.setState({
        cities: [{id: '0', name: 'Seleccionar'}, ...data.cities],
        cityEnabled: true
      })
    })
    .catch(error => {this.setState({cities: [{id: '0', name: 'Seleccionar'}]})});
  }

  render() {
    console.log(this.state);
    const { values, onFieldChange } = this.props;
    return (
        <div>
          <div className={'form-row'}>
            <Input
              name={'street'}
              label={'Calle'}
              placeholder={'Ej: Av. de Mayo'}
              type={'text'}
              value={values.street}
              onChange={onFieldChange}
              containerClass={'w-65'}
              className={values.streetErrorState ? 'error' : ''}
              errorState={values.streetErrorState}
              errorMessage={'Debe ingresar el nombre de la calle'} />
            <Input
              name={'streetNumber'}
              label={'Número'}
              placeholder={'Ej: 3651'}
              type={'text'}
              value={values.streetNumber}
              onChange={onFieldChange}
              containerClass={'w-30'}
              className={values.streetNumberErrorState ? 'error' : ''}
              errorState={values.streetNumberErrorState}
              errorMessage={'Debe ingresar el número de la calle'} />
          </div>
          <div className='form-row'>
            <Combobox
              name={'province'}
              label={'Provincia'}
              value={values.province}
              onChange={this.onChangeProvince.bind(this)}
              containerClass={'w-45'}
              className={values.provinceErrorState ? 'error' : ''}
              options={this.state.provinces}
              errorState={values.provinceErrorState}
              errorMessage={'Debe seleccionar una provincia'} />
            <Combobox
              disabled={!this.state.cityEnabled}
              name={'city'}
              label={'Localidad'}
              value={values.city}
              onChange={onFieldChange}
              containerClass={'w-45'}
              className={values.cityErrorState ? 'error' : ''}
              options={this.state.cities}
              errorState={values.cityErrorState}
              errorMessage={'Debe seleccionar una localidad'} />
          </div>
        </div>
    );
  }
}

export default FormStepTwo;
