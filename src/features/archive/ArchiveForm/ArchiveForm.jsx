import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { withFirestore } from "react-redux-firebase";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import { createArchive, updateArchive, publishToggle} from "../archiveActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import SelectOption from "../../../app/common/form/SelectOption";
const mapState = state => {
  
  let clean=true;
  let archive = {};

  if (state.firestore.ordered.Archives && state.firestore.ordered.Archives[0]) {
    archive = state.firestore.ordered.Archives[0];
    clean=false;
  }

  return {
    initialValues: archive,
    archive,
    clean
  };
};

const actions = {
  createArchive,
  updateArchive,
  publishToggle
};

const category = [
  { key: "physics", text: "Physics", value: "physics" },
  { key: "chemistry", text: "Chemistry", value: "chemistry" },
  { key: "maths", text: "Mathematics", value: "maths" },
  { key: "english", text: "English", value: "english" },
  { key: "biology", text: "Biology", value: "biology" },
  { key: "csc", text: "Computer Science", value: "csc" },
  { key: "other", text: "others", value: "other" }
];

const validate = combineValidators({
  title: isRequired({ message: "The archive title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

class ArchiveForm extends Component {
  onFormSubmit = values => {
    console.log(values);
    if (this.props.initialValues.id) {
      this.props.updateArchive(values);
      this.props.history.goBack();
    } else {
      this.props.createArchive(values);
      this.props.history.push("/archives");
    }
  };

  async componentDidMount() {
    const {firestore, match} = this.props;
    await firestore.setListener(`Archives/${match.params.id}`);
  }
  async componentWillUnmount() {
    const {firestore, match} = this.props;
    await firestore.unsetListener(`Archives/${match.params.id}`);
  }

  render() {
    const { invalid, submitting, pristine, archive, publishToggle, clean } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Archive Details" />
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

              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and time of archive"
              />

              {clean && 
              <Field 
                name="published"
                type="text"
                component={SelectOption}
                placeholder="Publish immediately"
              />
              }
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
              {!clean && <Button
                onClick={() => publishToggle(!archive.published, archive.id)}
                type='button'
                color={archive.published ? 'green' : 'red'}
                floated='right'
                content={archive.published ? 'Unpublish' : 'Publish'}
              />}
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(
    reduxForm({ form: "archiveForm", enableReinitialize: true, validate })(
      ArchiveForm
    )
  )
);
