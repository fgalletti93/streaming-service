import { FormEventHandler, ReactElement } from "react";
import { Field, reduxForm } from "redux-form";
import { FormValues } from "./types";

type StreamCreateProps = {
  handleSubmit: (arg0: Function) => FormEventHandler<HTMLFormElement>
}

const StreamCreate = ({ handleSubmit }: StreamCreateProps): ReactElement => {

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      )
    }
  }

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    )
  }

  const onSubmit = (formValues: FormValues) => {
    validate(formValues)
  }

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field name="description" component={renderInput} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  )
}

const validate = (formValues: FormValues) => {
  const errors = {} as any
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a desciption'
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)