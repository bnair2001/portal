import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan } from 'revalidate'
import { createArchive, updateArchive } from '../archiveActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => {
  const archiveId = ownProps.match.params.id;

  let archive = {};

  if (archiveId && state.archives.length > 0) {
    archive = state.archives.filter(archive => archive.id === archiveId)[0];
  }

  return {
    initialValues: archive
  };
};

const actions = {
  createArchive,
  updateArchive
};

const category = [
    {key: 'Lesson', text: 'Lesson', value: 'Lesson'},
    {key: 'Assignment', text: 'Assignment', value: 'Assignment'},
   
];

const validate = combineValidators({
  title: isRequired({message: 'The archive title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

class ArchiveForm extends Component {

  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateArchive(values);
      this.props.history.goBack();
    } else {
      const newArchive = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      };
      this.props.createArchive(newArchive);
      this.props.history.push('/archives');
    }
  };

  render() {
    const {invalid, submitting, pristine} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Archive Details'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your archive a name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={category}
                placeholder="What is your archive about"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your archive"
              />
              <Header sub color='teal' content='Archive Location details'/>
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Archive city"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Archive venue"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder="Date and time of archive"
              />
              <Button disabled={invalid || submitting || pristine} positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(
  reduxForm({ form: 'archiveForm', enableReinitialize: true, validate })(ArchiveForm)
);
