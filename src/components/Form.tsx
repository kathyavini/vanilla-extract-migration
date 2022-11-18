import { button, uploadButton } from '../styles/style.css';
import {
  formSection,
  form,
  formHint,
  imagePreview,
  imagePreviewLabel,
} from './Form.css';
import puer from '../assets/puer2.jpg';

export function Form() {
  return (
    <section className={formSection}>
      <form className={form} encType="multipart/form-data">
        <label htmlFor="name">Input name: *</label>
        <input id="name" name="name" placeholder="Name" />

        <label htmlFor="description">Input Description: (optional) </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"></textarea>

        <label htmlFor="textarea">
          Input textarea: *
          <p className={formHint}>
            Textarea instructions hint. This section gives more information
            about filling out the textarea.
          </p>
        </label>
        <textarea
          id="textarea"
          name="textarea"
          rows={8}
          placeholder="For example, you could write about the time..."></textarea>

        <label htmlFor="source-link">Input source link (if applicable):</label>
        <input
          id="source-link"
          name="sourceLink"
          placeholder="e.g. https://google.com/"
        />

        <label htmlFor="source-text">Source link text (optional): </label>
        <input
          id="source-text"
          name="sourceText"
          placeholder="e.g. Google Search"
        />

        <fieldset>
          <legend>Choose categories:</legend>

          <label htmlFor="one">
            <input type="checkbox" id="one" name="one" />
            Option One
          </label>

          <label htmlFor="two">
            <input type="checkbox" id="two" name="two" />
            Option Two
          </label>

          <label htmlFor="three">
            <input type="checkbox" id="three" name="three" />
            Option Three
          </label>
        </fieldset>

        <label className={imagePreviewLabel}>Image preview:</label>
        <img className={imagePreview} src={puer} />
        <input type="hidden" name="imagePath" />

        <label htmlFor="image">Upload a different image: </label>

        <input
          className={uploadButton}
          id="image"
          type="file"
          name="image"
          accept="image/*"
        />

        <label htmlFor="admin-password">Admin password: *</label>
        <input id="admin-password" type="password" name="adminPassword" />

        <button className={button.filled} type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
